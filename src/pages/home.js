import { Header } from "../components/Header/header";
import { Navbar } from "../components/Navbar/navbar";
// import { Footer } from "../components/Footer/footer";
import { Link, Outlet } from "react-router-dom";
export function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Outlet></Outlet>
      <Link to={'/'}>List </Link>
      {/*<Footer></Footer> */}
    </>
  );
}
