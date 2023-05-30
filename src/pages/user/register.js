import {Navbar} from "../../components/Navbar/navbar";
import {Link} from "react-router-dom";


export function Register() {
    return (
        <>
            <Navbar></Navbar>
            <div className="about-main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <center>
                                    <form className="form">
                                        <span className="title">Register</span>
                                        <p className="message">Signup now and get full access to our app. </p>
                                        <div className="flex">
                                            <label>
                                                <input required placeholder type="text" className="input" />
                                                <span>Name</span>
                                            </label>
                                            <label>
                                                <input required placeholder type="number" className="input" />
                                                <span>Phone</span>
                                            </label>
                                        </div>
                                        <label>
                                            <input required placeholder type="text" className="input" />
                                            <span>User Name</span>
                                        </label>
                                        <label>
                                            <input required placeholder type="password" className="input" />
                                            <span>Password</span>
                                        </label>
                                        <label>
                                            <input required placeholder type="password" className="input" />
                                            <span>Address</span>
                                        </label>
                                        <button className="submit">Submit</button>
                                        <p className="form-section-login">Already have an account ? <Link to={'/login'}>LogIn</Link> </p>
                                    </form>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Main Banner Area End ***** */}

        </>

    )
}