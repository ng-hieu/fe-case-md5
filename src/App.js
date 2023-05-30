import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/user/login";
import { Register } from "./pages/user/register";
import { AddHouseRenting } from "./pages/owners/addHouseRensting";

function App() {
  return (
    <>
      <Routes>
        <Route path={"login"} element={<Login />}></Route>
        <Route path={"register"} element={<Register />}></Route>
        <Route path={"home"} element={<Home />}>
          <Route path={"create"} element={<AddHouseRenting />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
