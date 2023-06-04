import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/user/login";
import { Register } from "./pages/user/register";
import { useSelector } from "react-redux";
import { HouseList } from "./pages/houseList";
import { Description } from "./pages/house/description";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { ListOFHouseForRent } from "./pages/ListofHousesforRent";
import { UserManager } from "./pages/admin/userManagement";
import {ProfilePage} from "./pages/user/showProfileUser";
import { EditHouseRenting } from "./pages/owners/editHouseRensting";
import { AddHouseRenting } from "./pages/owners/addHouseRensting";
function App() {
  let user = useSelector(({ user }) => {
    return user.currenState;
  });
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          {user ? (
            <>
              <Route path={"home"} element={<Home />}>
                {user.role === 2 ? (
                  <>
                    <Route path={""} element={<HouseList />}></Route>
                    <Route path={":id"} element={<Description />}></Route>
                    <Route path={"create"} element={<AddHouseRenting />}></Route>
                    <Route path = {"edit/:id"} element={<EditHouseRenting/>}></Route>
                    <Route path={"listhousforrent"} element={<ListOFHouseForRent />}></Route>
                    <Route path={"showProfile"}element = {<ProfilePage/>} ></Route>
                  </>
                ) : (
                  <>
                    <Route path={""} element = {<UserManager />}></Route>
                  </>
                )}
              </Route>
              <Route path={"*"} element={<Navigate to={"home"} />} />
            </>
          ) : (
            <>
              <Route path={"*"} element={<Navigate to={"login"} />} />
            </>
          )}
        </Routes>
      </LocalizationProvider>
    </>
  );
}

export default App;
