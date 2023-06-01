import {Navbar} from "../../components/Navbar/navbar";
import {useEffect, useState} from "react";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {storage} from "../firebase";
import {v4} from "uuid";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {editHouseById} from "../../service/houseService";
import {useNavigate, useParams} from "react-router-dom";
import customAPI from "../../service/customAPI";


export function EditHouseRenting() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()
    const [house, setHouse] = useState({
        nameHouse: "",
        price: "",
        area: "",
        description: "",
        wards: "",
        district: ""
    })
    useEffect(() => {
        customAPI.get(`house/${id}`).then((res) => {
            setHouse(res.data)
        })
    }, [])
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadFile = async (setFieldValue) => {
        if (!selectedFile) return;
        const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
        await uploadBytes(imageRef, selectedFile);
        const url = await getDownloadURL(imageRef);
        setFieldValue("image", [...imageUrls, url]);
        setImageUrls((prev) => [...prev, url]);

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
            <Navbar></Navbar>
            <Formik
                initialValues={house}
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
                                                                    <button type="submit">EDIT HOUSE →</button>
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
