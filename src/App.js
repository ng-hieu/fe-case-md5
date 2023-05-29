import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {Login} from "./pages/user/login";
import {Register} from "./pages/user/register";

function App() {
    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}></Route>
                <Route path={'register'} element={<Register/>}></Route>

                <Route path={'home'} element={<Home/>}>

                </Route>
            </Routes>
        </>
    );
}

export default App;
