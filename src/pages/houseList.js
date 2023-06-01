import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom"
// import axios from "axios";
import { deleteHouse, getAllHouse } from "../service/houseService";
import { Header } from "../components/Header/header";
import {Description} from "./house/description";
import { FilterHouse } from "../components/Filter/filter";
export function HouseList() {
  const dispatch = useDispatch();
  const house = useSelector(({ houseList }) => {
    return houseList.listHouse;
  });
  const sortOrder = useSelector(({ houseList }) => {
    return houseList.sortOrder;
  });

  let sortedHouses = [...house];
  switch (sortOrder) {
    case "1":
      sortedHouses.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case "2":
      sortedHouses.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    default:
      break;
  }

 
  useEffect(() => {
    dispatch(getAllHouse());
  }, []);
  return (
    <>
      <Header></Header>
      <FilterHouse></FilterHouse>
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
                  {sortedHouses.map((item) => (
                    console.log(item),
                    <div className="col-lg-12">
                      <div className="item">
                        <div className="row">
                          <div className="col-lg-4 col-sm-5">
                            <div className="image">
                              <img
                                src={(item.image[0])?item.image[0].imageURL:''}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-7">
                            <div className="right-content">
                              <h4>{item.nameHouse}</h4>
                              <span>{item.district.name}</span>
                              <p>{item.description}</p>
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
