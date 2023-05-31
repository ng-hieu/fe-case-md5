import { useSelector } from "react-redux";
import { Header } from "../components/Header/header";
import { NavbarBfLogin} from "../components/Navbar/navbarBfLogin";
// import { Footer } from "../components/Footer/footer";
import { Outlet } from "react-router-dom";
import { NavbarAfLogin } from "../components/Navbar/navbarAfLogin";
export function Home() {
  let user = useSelector(({user}) => {
    return user.currenState;
})
  return (
    <>{
      user?<NavbarAfLogin></NavbarAfLogin>:<NavbarBfLogin></NavbarBfLogin>
    }
      <Outlet></Outlet>
      {/*<Footer></Footer> */}
    </>
  );
}
