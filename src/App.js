import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/user/login";
import { Register } from "./pages/user/register";
import { AddHouseRenting } from "./pages/owners/addHouseRensting";
import {useSelector} from "react-redux";
import { HouseList } from "./pages/houseList";
import {EditHouseRenting} from "./pages/owners/editHouseRensting";
import {AdapterDayjs} from "@mui/x-date-pickers-pro/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";

function App() {
    let user = useSelector(({user}) => {
        return user.currenState;
    })
  return (
      <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
              <Route path={'login'} element={<Login/>}/>
              <Route path={'register'} element={<Register/>}/>
              {
                  user ?
                      <>
                          <Route path={'home'} element={<Home/>}>
                            <Route path={""} element={<HouseList />}></Route>
                              <Route path={"create"} element={<AddHouseRenting />}></Route>
                              <Route path={"edit/:id"} element={<EditHouseRenting />}></Route>

                          </Route>
                          <Route path={"*"} element={<Navigate to={'home'}/>}/>
                      </>
                      :
                      <>
                          <Route path={"*"} element={<Navigate to={'login'}/>}/>
                      </>
              }

          </Routes>
          </LocalizationProvider>
      </>
  );
}

export default App;
