import { Navbar } from "../../components/Navbar/navbar";
import "./addHouse.css"
import {useState, useEffect} from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import {storage} from "../firebase";
import {v4} from "uuid";

export function AddHouseRenting() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);


    const uploadFile = async () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage,` images/${imageUpload.name + v4()}`);
        await uploadBytes(imageRef, imageUpload);
        const url = await getDownloadURL(imageRef);
        setImageUrls((prev) => [...prev, url]);
    };

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
                                                    <form className="form-addHouse">
                                                        <div className="descr-addHouse">
                                                            CREATE MORE HOUSE
                                                        </div>
                                                        <div className="input-addHouse">
                                                            <input required autoComplete="off" type="text" />
                                                            <label htmlFor="price">Price</label>
                                                        </div>
                                                        <div className="input-addHouse">
                                                            <input
                                                                required
                                                                autoComplete="off"
                                                                name="area"
                                                                type="text"
                                                            />
                                                            <label htmlFor="area">Area</label>
                                                        </div>
                                                        <div className="input-addHouse">
                          <textarea
                              required
                              cols={30}
                              rows={1}
                              id="description"
                              defaultValue={""}
                          />
                                                            <label htmlFor="description">Description</label>
                                                        </div>
                                                        <button>ADD HOUSE →</button>
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
                                                    <label htmlFor="arquivo">Choose a file:</label>
                                                    <input
                                                        type="file"
                                                        className="inpdddut"
                                                        onChange={(event) => {
                                                            setImageUpload(event.target.files[0]);
                                                        }}
                                                    />
                                                    <button type="submit" onClick={uploadFile} className="inpdddut">
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
        </>
    );
}




