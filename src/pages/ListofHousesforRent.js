import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteHouse, listOFHouseForRent } from "../service/houseService";
export function ListOFHouseForRent() {
  const dispatch = useDispatch();
  const house = useSelector(({ houseList }) => {
    console.log(houseList)
    return houseList.Arrayhouse;
  });
  const userId = JSON.parse(localStorage.getItem("user")).id;

  useEffect(() => {
    dispatch(listOFHouseForRent(userId));
  }, []);

  return (
    <>
      <div className="visit-country">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h2 style={{ color: "white" }}>Welcome to Hanoi</h2>
                <p>Have a nice trip</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="items">
                <div className="row">
                  {console.log(house)}
                  {house.map((item) => (
                    
                    <div className="col-lg-12">
                      <div className="item">
                        <div className="row">
                          <div className="col-lg-4 col-sm-5">
                            <div className="image">
                              <img
                                src={
                                  item.image[0] ? item.image[0].imageURL : ""
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-7">
                            <div className="right-content">
                              <h4>{item.nameHouse}</h4>
                              {/* <span>{item.district.name}</span> */}
                              <p>{item.description}</p>
                              <p>{item.user && item.user.name}</p>
                              <ul className="info">
                                <li>
                                  <i className="fa fa-user" /> 8.66 Mil People
                                </li>
                                <li>
                                  <i className="fa fa-globe" /> {item.area}m2
                                </li>
                                <li>
                                  <i className="fa fa-home" />
                                  {item.price} VND
                                </li>
                              </ul>
                              <button>
                                <Link to={`/home/edit/${item.id}`}>Edit</Link>
                              </button>
                              <button
                                onClick={() => dispatch(deleteHouse(item.id))}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-bar-map">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      <iframe
                        src="https://maps.google.com/maps?q=HaNoi&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="550px"
                        frameBorder={0}
                        style={{ border: 0, borderRadius: "23px" }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
