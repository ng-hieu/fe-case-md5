export function Navbar() {
  return (
    <>
      {/* ***** Header Area Start *****  */}
      <header className="header-area header-sticky">
        <div className="container" style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="col-1" style={{ height: "100%" }}>
              <div style={{ height: "100%" }}>
                <a href="index.html" className="logo">
                  <img
                    src="/assets/images/logo.png"
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      aspectRatio: "1/1",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="col-11">
              <nav className="main-nav">
                {/* {/* ***** Logo Start *****  */}

                {/* {/* ***** Logo End *****  */}
                {/* {/* ***** Menu Start *****  */}
                <ul className="nav">
                  <li>
                    <a href="index.html" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="deals.html">Deals</a>
                  </li>
                  <li>
                    <a href="reservation.html">Reservation</a>
                  </li>
                  <li>
                    <a href="reservation.html">Book Yours</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
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
