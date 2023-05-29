import { Navbar } from "../components/Navbar/navbar";
//import { Header } from "../components/Header/header";
import { Outlet } from "react-router-dom";
// import { HeaderOfPageDetail } from "../components/Header/headerOfPageDetail";
export function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
