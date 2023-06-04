import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../../redux/user/userSlice";
export function NavbarOfUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {/* ***** Header Area Start *****  */}
      <header className="header-area header-sticky">
        <div className="container" style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="col-1" style={{ height: "100%" }}>
              <div style={{ height: "100%" }}>
                <Link to={"/home"} className="logo">
                  <img
                    src="/assets/images/logo.png"
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      aspectRatio: "1/1",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-10">
              <nav className="main-nav">
                <ul className="nav">
                  <li>
                    <Link to={"/home"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/home/create"}>Add House</Link>
                  </li>
                  <li>
                    <Link href="deals.html">Deals</Link>
                  </li>
                  <li>
                    <Link href="reservation.html">Book Yours</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-1">
              <div class="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-light dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false" style={{marginTop:15}}
                >
                  Action<i class="far fa-house-night"></i>
                </button>
                <div className="dropdown-menu" style={{width:"10px"}}>
              
              <Link to={"showProfile"} style={{marginLeft:20}}><i class="fa-solid fa-face-smile"></i> Profile</Link>
              <div className="dropdown-divider"></div>

              <a class="dropdown-item" onClick={() => {
                    dispatch(deleteUser);
                    localStorage.removeItem("user");
                    navigate("/login");
                  }} ><i class="fas fa-walking"></i> Log out</a>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End *****  */}
    </>
  );
}
