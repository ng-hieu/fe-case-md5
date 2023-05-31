import { useFormik } from "formik";
import * as Yup from "yup";
import { Navbar } from "../../components/Navbar/navbar";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { findHouseById } from "../../service/houseService";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import customAPI from "../../service/customAPI";

export function EditHouse() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [idHouse, setId] = useState(null);
  const [house, setHouse] = useState({
    nameHouse: "",
      price: "",
      area: "",
      description: "findHouse.description",
  });
  useEffect(()=>{
    customAPI.get('house/:id').then(house => {
        
    },[])
  })
  
  const findHouse = useSelector((state) => {
    console.log(state, 111);
    return state.houseList.house
    
  });
useEffect(() => {
    dispatch(findHouseById(id))
},[])

  //   useEffect(() => {
  //     const houseId = "your_house_id";
  //     dispatch(findHouseById(houseId)).then((house) => {
  //       setId(house.id);
  //       formik.setValues({
  //         name: house.name,
  //         price: house.price,
  //         area: house.area,
  //         description: house.description
  //       });
  //     });
  //   }, []);
  const formik = useFormik({
    initialValues: {house
    //   nameHouse: findHouse.nameHouse,
    //   price: findHouse.price,
    //   area: findHouse.area,
    //   description: findHouse.description,
    },
    enableReinitialize:true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.string().required("Price is required"),
      area: Yup.string().required("Area is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      console.log("Updating house with id", idHouse);
      console.log("New name:", values.name);
      console.log("New price:", values.price);
      console.log("New area:", values.area);
      console.log("New description:", values.description);
      // handleEditHouse(values)
      // uploadFile()
    },
  });

  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, ` images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(imageRef);
    setImageUrls((prev) => [...prev, url]);
  };
  useEffect(() => {
    dispatch(findHouseById(id));
  }, []);

  return (
    <>
      <Navbar></Navbar>

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
                          <form
                            className="form-addHouse"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="descr-addHouse">
                              EDIT HOUSE DETAILS
                            </div>
                            <div className="input-addHouse">
                              <input
                                required
                                autoComplete="off"
                                type="text"
                                {...formik.getFieldProps("name")}
                              />
                              {formik.touched.name && formik.errors.name && (
                                <div className="error-msg">
                                  {formik.errors.name}
                                </div>
                              )}
                              <label htmlFor="price">Name House</label>
                            </div>
                            <div className="input-addHouse">
                              <input
                                required
                                autoComplete="off"
                                type="text"
                                {...formik.getFieldProps("price")}
                              />
                              {formik.touched.price && formik.errors.price && (
                                <div className="error-msg">
                                  {formik.errors.price}
                                </div>
                              )}
                              <label htmlFor="price">Price</label>
                            </div>
                            <div className="input-addHouse">
                              <input
                                required
                                autoComplete="off"
                                name="area"
                                type="text"
                                {...formik.getFieldProps("area")}
                              />
                              {formik.touched.area && formik.errors.area && (
                                <div className="error-msg">
                                  {formik.errors.area}
                                </div>
                              )}
                              <label HTMLFor="area">Area</label>
                            </div>
                            <div className="input-addHouse">
                              <textarea
                                required
                                cols={30}
                                rows={1}
                                id="description"
                                {...formik.getFieldProps("description")}
                              />
                              {formik.touched.description &&
                                formik.errors.description && (
                                  <div className="error-msg">
                                    {formik.errors.description}
                                  </div>
                                )}
                              <label htmlFor="description">Description</label>
                            </div>

                            <button type="submit" onClick={uploadFile}>
                              EDIT HOUSE →
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className="col-lg-8">
                        <div className="addimg-container">
                          {imageUpload && (
                            <img
                              src={URL.createObjectURL(imageUpload)}
                              alt="Preview"
                            />
                          )}
                          <label htmlFor="arquivo">Upload Image:</label>
                          <input
                            type="file"
                            className="inpdddut"
                            onChange={(event) => {
                              setImageUpload(event.target.files[0]);
                            }}
                          />
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
    </>
  );
}
