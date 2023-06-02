import {useEffect, useState} from "react";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import {storage} from "../firebase";
import {v4} from "uuid";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {editHouseById} from "../../service/houseService";
import {useNavigate, useParams} from "react-router-dom";
import customAPI from "../../service/customAPI";
import {NavbarOfUser} from "../../components/Navbar/navbarOfUser"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActions from "@mui/material/CardActions";
import * as React from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{position: "relative", display: "inline-flex"}}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
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

export function EditHouseRenting() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()
    const [progress, setProgress] = useState();
    const [house, setHouse] = useState({
        nameHouse: "",
        price: "",
        area: "",
        description: "",
        wards: "",
        district: "",
        image: []
    })
    useEffect(() => {
        customAPI.get(`house/${id}`).then((res) => {
            setHouse(res.data)
        })
    }, [])

    const [selectedFile, setSelectedFile] = useState(null);

    const uploadFile = async (setFieldValue, values) => {
        if (!selectedFile) return;
        const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
        const uploadTask = uploadBytesResumable(imageRef, selectedFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {

                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            (error) => {
                console.log(error)

            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setFieldValue("image", [...values.image, downloadURL]);
                    setHouse({
                        ...house,
                        image: [...house.image, {imageURL: downloadURL}]
                    })


                });
            }
        );

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
                console.log(e, "err 56")
            })
    }, [])
    const handleDistrictChange = (id) => {
        setDistrictId(id);
    }
    const [wards, setWards] = useState([])
    useEffect(() => {
        customAPI.get(`wards/${districtId}`)
            .then((response) => {
                setWards(response.data);
            })
            .catch((error) => {
                console.log(error, "error 69");
            });
    }, [districtId]);


    return (
        <>
            <NavbarOfUser></NavbarOfUser>
            <Formik
                initialValues={{
                    ...house,
                    image: house.image.map(item => item.imageURL)
                }}
                enableReinitialize={true}
                onSubmit={async (values, {setSubmitting}) => {
                    await dispatch(editHouseById(
                        {
                            id: id,
                            house: values

                        }
                    ))
                    navigate('/home')
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
                                                                        EDIT HOUSE

                                                                        {console.log("values:", values)}
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
                                                                    <button type="submit">EDIT HOUSE →</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className={"imgContainer"}>
                                                                {house.image ? house.image.map((item, index) =>
                                                                        <Card sx={{maxWidth: 345}} key={index}>
                                                                            <CardHeader
                                                                                title={`Image ${index + 1}`}
                                                                                action={
                                                                                    <IconButton aria-label="settings"
                                                                                                onClick={() => {
                                                                                                    let images = values.image;
                                                                                                    images.splice(index, 1);
                                                                                                    setFieldValue("image", images);

                                                                                                    house.image.splice(index, 1)
                                                                                                    setHouse({
                                                                                                        ...house
                                                                                                    })
                                                                                                }}
                                                                                    >
                                                                                        <MoreVertIcon/>
                                                                                    </IconButton>
                                                                                }
                                                                            />
                                                                            <CardMedia
                                                                                component="img"
                                                                                height="194"
                                                                                sx={{
                                                                                    aspectRatio: 1 / 1,
                                                                                    padding: "10px",

                                                                                }
                                                                                }
                                                                                image={item.imageURL}
                                                                                alt=""
                                                                            />
                                                                            <CardActions disableSpacing>
                                                                            </CardActions>
                                                                        </Card>
                                                                    )
                                                                    : ""}
                                                            </div>

                                                            <div className="addimg-container">
                                                                {selectedFile && (
                                                                    <img
                                                                        src={URL.createObjectURL(selectedFile)}
                                                                        alt="Preview"
                                                                    />
                                                                )}
                                                                <div>
                                                                    <CircularProgressWithLabel
                                                                        value={progress ? progress : ""}
                                                                    />
                                                                </div>
                                                                <label htmlFor="arquivo">Upload Image:</label>
                                                                <input
                                                                    type="file"
                                                                    className="inpdddut"
                                                                    onChange={handleFileChange}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        uploadFile(setFieldValue, values)
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

