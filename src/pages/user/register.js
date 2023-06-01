// import {NavbarBfLogin} from "../../components/Navbar/navbarBfLogin";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from "../../service/userService";
import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";

export function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <>
            {/* <NavbarBfLogin></NavbarBfLogin> */}
            <Formik
                initialValues={{
                    name: "",
                    phoneNumber: "",
                    username: "",
                    password: "",
                    address: "",
                    roleId:"2"
                }}
                onSubmit={(user) => {
                    dispatch(registerUser(user));
                    navigate('/home')
                }}
            >
                <Form>
                    <div className="about-main-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="content">
                                        <center>
                                            <div className="form">
                                                <span className="title">Register</span>
                                                <p className="message">
                                                    Signup now and get full access to our app.{" "}
                                                </p>
                                                <div className="flex">
                                                    <label>
                                                        <Field
                                                            required
                                                            placeholder
                                                            type="text"
                                                            name="name"
                                                            className="input"
                                                        />
                                                        <span>Name</span>
                                                    </label>
                                                    <label>
                                                        <Field
                                                            required
                                                            placeholder
                                                            type="number"
                                                            name="phoneNumber"
                                                            className="input"
                                                        />
                                                        <span>Phone</span>
                                                    </label>
                                                </div>
                                                <label>
                                                    <Field
                                                        required
                                                        placeholder
                                                        name="username"
                                                        type="text"
                                                        className="input"
                                                    />
                                                    <span>User Name</span>
                                                </label>
                                                <label>
                                                    <Field
                                                        required
                                                        placeholder
                                                        type="password"
                                                        name="password"
                                                        className="input"
                                                    />
                                                    <span>Password</span>
                                                </label>
                                                <label>
                                                    <Field
                                                        required
                                                        placeholder

                                                        type="text"
                                                        name="address"
                                                        className="input"
                                                    />
                                                    <span>Address</span>
                                                </label>
                                                <button type="submit" className="submit">Submit</button>
                                                <p className="form-section-login">
                                                    Already have an account ?{" "}
                                                    <Link to={"/login"}>LogIn</Link>{" "}
                                                </p>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ***** Main Banner Area End ***** */}
                </Form>
            </Formik>
        </>);
}