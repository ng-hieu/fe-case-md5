import { useSelector } from "react-redux";
// import { Footer } from "../components/Footer/footer";
import { Outlet } from "react-router-dom";
import { NavbarOfUser } from "../components/Navbar/navbarOfUser";
import { NavbarOfAdmin} from "../components/Navbar/navbarOfAdmin";
export function Home() {
  let user = useSelector(({ user }) => {
    return user.currenState;
  });
  return (
    <>
      {user.role === 1 ? <NavbarOfAdmin></NavbarOfAdmin> : <NavbarOfUser></NavbarOfUser>}
      <Outlet></Outlet>
      {/*<Footer></Footer> */}
    </>
  );
}
