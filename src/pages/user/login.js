import {Navbar} from "../../components/Navbar/navbar";
import {Link} from "react-router-dom";


export function Login() {
    return (
        <>
            <Navbar></Navbar>
            <div className="about-main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <center>
                                    <div className="col-lg-6">
                                        <div className="form-box-login">
                                            <form className="form-login">
                                                <span className="title">LogIn</span>
                                                <div className="flex">
                                                    <input type="text" className="input-login" placeholder="User Name"/>
                                                    <input type="password" className="input-login" placeholder="Password"/>
                                                </div>
                                                <button className="submit">LogIn</button>
                                            </form>
                                            <div className="form-section-login">
                                                <p>Do not have an account? <Link to={'/register'}>Register</Link></p>
                                            </div>
                                        </div>
                                    </div>
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