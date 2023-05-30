import { Navbar } from "../components/Navbar/navbar";
// import { Footer } from "../components/Footer/footer";
import { Outlet } from "react-router-dom";
export function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/*<Footer></Footer> */}
    </>
  );
}
