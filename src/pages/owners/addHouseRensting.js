import { Navbar } from "../../components/Navbar/navbar";

export function AddHouseRenting() {
  return (
    <>
      <Navbar></Navbar>
      <div className="about-main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <center>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="container-addHouse">
                          <form className="form-addHouse">
                            <div className="descr-addHouse">
                              CREATE MORE HOUSE
                            </div>
                            <div className="input-addHouse">
                              <input required autoComplete="off" type="text" />
                              <label htmlFor="price">Price</label>
                            </div>
                            <div className="input-addHouse">
                              <input
                                required
                                autoComplete="off"
                                name="area"
                                type="text"
                              />
                              <label htmlFor="area">Area</label>
                            </div>
                            <div className="input-addHouse">
                              <textarea
                                required
                                cols={30}
                                rows={1}
                                id="description"
                                defaultValue={""}
                              />
                              <label htmlFor="description">Description</label>
                            </div>
                            <button>ADD HOUSE →</button>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        AddIMG
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
