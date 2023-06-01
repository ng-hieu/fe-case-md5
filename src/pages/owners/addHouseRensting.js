import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/navbar';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../service/houseService';
import { useNavigate } from 'react-router-dom';
import customAPI from '../../service/customAPI';
import {
    CircularProgress,
    Typography,
    Box,
} from '@mui/material';
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../firebase';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>

    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};



export function AddHouseRenting() {
    const [progress,setProgress] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadFile = async (setFieldValue) => {
        if (!selectedFile) return;
        const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
        const uploadTask = uploadBytesResumable(imageRef, selectedFile);


        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                setProgress ((snapshot.bytesTransferred / snapshot.totalBytes) * 100)



            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setFieldValue("image", [...imageUrls, downloadURL]);
                    setImageUrls((prev) => [...prev, downloadURL]);
                });
            }
        );

        // await uploadBytes(imageRef, selectedFile);
        // const url = await getDownloadURL(imageRef);
        // setFieldValue("image", [...imageUrls, url]);
        // setImageUrls((prev) => [...prev, url]);

    };

    const submit = async (house) => {
        console.log(house, "add house")
       await dispatch(createHouse(house))
        navigate('/home')

    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const [district, setDistrict] = useState([])
    const [districtId, setDistrictId] = useState('');
    useEffect(() => {
        customAPI.get(`district`)
            .then((response) => {
                setDistrict(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const handleDistrictChange = (id) => {
        console.log(id)
        setDistrictId(id);
    }
    const [wards, setWards] = useState([])
    useEffect(() => {
        customAPI.get(`wards/${districtId}`)
            .then((response) => {
                setWards(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [districtId]);

    return (
        <>
            <Navbar></Navbar>
            <Formik
                initialValues={{
                    nameHouse: "",
                    price: "",
                    area: "",
                    description: "",
                }}
                onSubmit={(values, {setSubmitting}) => {
                    submit(values)
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      setFieldValue
                      /* and other goodies */
                  }) => (
                    <Form>
                        <p>{console.log(values)} </p>
                        <div className="about-main-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="content">
                                            <center>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="container-addHouse">
                                                                <div className="form-addHouse">
                                                                    <div className="descr-addHouse">
                                                                        CREATE MORE HOUSE
                                                                    </div>
                                                                    <div className="input-addHouse">
                                                                        <Field
                                                                            required
                                                                            autoComplete="off"
                                                                            type="text"
                                                                            name="nameHouse"
                                                                        />
                                                                        <label htmlFor="price">Name House</label>
                                                                    </div>
                                                                    <div className="input-addHouse">
                                                                        <Field
                                                                            required
                                                                            autoComplete="off"
                                                                            type="text"
                                                                            name="price"
                                                                        />
                                                                        <label htmlFor="price">Price</label>
                                                                    </div>
                                                                    <div className="input-addHouse">
                                                                        <Field
                                                                            required
                                                                            autoComplete="off"
                                                                            name="area"
                                                                            type="text"
                                                                        />
                                                                        <label htmlFor="area">Area</label>
                                                                    </div>
                                                                    <div className="input-addHouse">
                                                                        <Field
                                                                            required
                                                                            autoComplete="off"
                                                                            name="description"
                                                                            type="text"
                                                                        />
                                                                        <label htmlFor="description">Description</label>
                                                                    </div>
                                                                    <div>
                                                                        <Field component={'select'} name={'district'}
                                                                               onChange={(e) => {
                                                                                   handleDistrictChange(e.target.value)
                                                                                   setFieldValue("district", e.target.value)
                                                                               }}>
                                                                            <option value=''>Chọn Quận</option>
                                                                            {district.map((item) => {
                                                                                return <option key={item.id}
                                                                                               value={item.id}>{item.name}
                                                                                </option>
                                                                            })
                                                                            }
                                                                        </Field>
                                                                    </div>
                                                                    <div>
                                                                        <Field component={'select'} name={'wards'}
                                                                            // onChange={(e) => {
                                                                            //     handleDistrictChange(e.target.value)
                                                                            // }}
                                                                        >
                                                                            <option value=''>Chọn Phường/Xã</option>
                                                                            {wards.map((item) => {
                                                                                return <option key={item.id}
                                                                                               value={item.id}>{item.name}
                                                                                </option>
                                                                            })
                                                                            }
                                                                        </Field>
                                                                    </div>
                                                                    <button type="submit">ADD HOUSE →</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-8">
                                                            <div className="addimg-container">
                                                                {selectedFile && (
                                                                    <img
                                                                        src={URL.createObjectURL(selectedFile)}
                                                                        alt="Preview"
                                                                    />
                                                                )}
                                                                <div> <CircularProgressWithLabel value={progress?progress:''} />;</div>
                                                                <label htmlFor="arquivo">Upload Image:</label>
                                                                <input
                                                                    type="file"
                                                                    className="inpdddut"
                                                                    onChange={handleFileChange}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        uploadFile(setFieldValue)
                                                                    }}
                                                                    className="inpdddut"
                                                                >
                                                                    Upload Image
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>)}
            </Formik>
        </>
    );
}
