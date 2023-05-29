import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import { AddHouseRenting } from "./pages/owners/addHouseRensting";
function App() {
  return (
    <>
      <Routes>
        <Route path={"home"} element={<Home />}>
          <Route path={"create"} element={<AddHouseRenting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
