import {Navbar} from "../../components/Navbar/navbar";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../service/userService";
import {useDispatch} from "react-redux";
import {useState} from "react";

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const submit = () => {
        dispatch(login({
            username: username,
            password: password
        })).then((data) => {
            if (data.payload === "User is not exist") {
                localStorage.clear();
                navigate('/login');
            } else {
                navigate('/home');
            }
        });
    }

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
                                                    <input type="text" className="input-login" placeholder="User Name"
                                                           value={username} onChange={(e) => {
                                                        setUsername(e.target.value)
                                                    }
                                                    }/>
                                                    <input type="password" className="input-login"
                                                           placeholder="Password" value={password} onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }
                                                    }/>
                                                </div>
                                                <button className="submit" type="button" onClick={submit}>LogIn</button>
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