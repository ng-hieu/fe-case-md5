// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {Link} from "react-router-dom"
// import axios from "axios";
// import { getAllHouse } from "../service/houseService";
export function HouseList(){
    // const dispatch = useDispatch()
    // const house = useSelector(({houseList}) => {
    //     console.log("houseList.listHouse", houseList.listHouse)
    //     return houseList.listHouse
    // })  
    // useEffect(() => {
    //     dispatch(getAllHouse())
    // },[])
    return (
        <>
        <div className="visit-country">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h2>Visit One Of Our Countries Now</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="items">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img src="assets/images/country-01.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                          <div className="right-content">
                            <h4>SWITZERLAND</h4>
                            <span>Europe</span>
                            <p>Woox Travel is a professional Bootstrap 5 theme HTML CSS layout for your website. You can use this layout for your commercial work.</p>
                            <ul className="info">
                              <li><i className="fa fa-user" /> 8.66 Mil People</li>
                              <li><i className="fa fa-globe" /> 41.290 km2</li>
                              <li><i className="fa fa-home" /> $1.100.200</li>
                            </ul>
                            <div className="text-button">
                              <a href="about.html">Need Directions ? <i className="fa fa-arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img src="assets/images/country-02.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                          <div className="right-content">
                            <h4>CARIBBEAN</h4>
                            <span>North America</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <ul className="info">
                              <li><i className="fa fa-user" /> 44.48 Mil People</li>
                              <li><i className="fa fa-globe" /> 275.400 km2</li>
                              <li><i className="fa fa-home" /> $946.000</li>
                            </ul>
                            <div className="text-button">
                              <a href="about.html">Need Directions ? <i className="fa fa-arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="item last-item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img src="assets/images/country-03.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                          <div className="right-content">
                            <h4>FRANCE</h4>
                            <span>Europe</span>
                            <p>We hope this WoOx template is useful for you, please support us a <a href="https://paypal.me/templatemo" target="_blank">small amount of PayPal</a> to info [at] templatemo.com for our survival. We really appreciate your contribution.</p>
                            <ul className="info">
                              <li><i className="fa fa-user" /> 67.41 Mil People</li>
                              <li><i className="fa fa-globe" /> 551.500 km2</li>
                              <li><i className="fa fa-home" /> $425.600</li>
                            </ul>
                            <div className="text-button">
                              <a href="about.html">Need Directions ? <i className="fa fa-arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-bar-map">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="550px" frameBorder={0} style={{border: 0, borderRadius: '23px'}} allowFullScreen />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}