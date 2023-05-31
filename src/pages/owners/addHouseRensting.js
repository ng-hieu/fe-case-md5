import {Navbar} from "../../components/Navbar/navbar";
import {useEffect, useState} from "react";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {storage} from "../firebase";
import {v4, validate} from "uuid";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {createHouse, getDistrict} from "../../service/houseService";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import CustomAPI from "../../service/customAPI";

export function AddHouseRenting() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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

    const submit = (house) => {
        console.log(house, "add house")
        dispatch(createHouse(house))
        navigate('/home')

    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // const [district,setDistrict]=useState()
    // useEffect(async (idDistrict)=>{
    //     dispatch(getDistrict)
    //     setDistrict(idDistrict)
    // },[])

    return (
        <>
            <Navbar></Navbar>
            <Formik
                initialValues={{
                    nameHouse: "",
                    price: "",
                    area: "",
                    description: ""
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
                                                                        {/*<Field as={'select'} name={'district'}>*/}
                                                                        {/*    <option onClick={}>Quận</option>*/}
                                                                        {/*</Field>*/}
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
