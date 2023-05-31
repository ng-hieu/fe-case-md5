import { Link } from "react-router-dom";
export function NavbarBfLogin() {
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
            <div className="col-9">
              <nav className="main-nav">
                <ul className="nav">
                  <li>
                    <Link to={"/home"} className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="deals.html">Deals</a>
                  </li>
                  <li>
                    <a href="reservation.html">Book Yours</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
            <div className="col-2">
              <nav className="main-nav">
                <ul className="nav flex-nowrap">
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </ul>
                {/* ***** Menu End *****  */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End *****  */}
    </>
  );
}
