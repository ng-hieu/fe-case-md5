import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/user/login";
import { Register } from "./pages/user/register";
import { AddHouseRenting } from "./pages/owners/addHouseRensting";
import {useSelector} from "react-redux";
import { HouseList } from "./pages/houseList";

function App() {
    let user = useSelector(({user}) => {
        console.log(user.currenState)
        return user.currenState;
    })
  return (
      <>
          <Routes>
              <Route path={'login'} element={<Login/>}/>
              <Route path={'register'} element={<Register/>}/>
              {
                  user ?
                      <>
                          <Route path={'home'} element={<Home/>}>
                              <Route path={"create"} element={<AddHouseRenting />}></Route>

                          </Route>
                          <Route path={"*"} element={<Navigate to={'home'}/>}/>
                      </>
                      :
                      <>
                          <Route path={"*"} element={<Navigate to={'login'}/>}/>
                      </>
              }

          </Routes>
      </>
  );
}

export default App;
