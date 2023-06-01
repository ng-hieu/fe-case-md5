import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHouseById } from "../../service/houseService";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";

import { Formik, Field, Form } from "formik";
import { createContract } from "../../service/contractService";
import { NavbarOfUser } from "../../components/Navbar/navbarOfUser";

export function Description() {
  const dispatch = useDispatch();
  let user = useSelector(({ user }) => {
    return user.currenState;
  });

  const { id } = useParams();
  const house = useSelector(({ house }) => {
    return house.house;
  });
  const [cost, setCost] = useState([
    // dayjs( new Date()),
    // dayjs(''),
  ]);

  // let startDate= setStartDay(value[0])
  // let endDate= setEndDay(value[1])
  function daysBetweenDates(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Số milliseconds trong 1 ngày
    const start = new Date(startDate); // Tạo đối tượng Date cho ngày bắt đầu
    const end = new Date(endDate); // Tạo đối tượng Date cho ngày kết thúc
    const diffDays = Math.round(Math.abs((start - end) / oneDay)); // Tính số ngày giữa 2 mốc thời gian và làm tròn đến số nguyên gần nhất
    return diffDays;
  }

  useEffect(() => {
    dispatch(getHouseById(id));
  }, []);
  return (
    <>
      <NavbarOfUser></NavbarOfUser>
      <div class="second-page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h4> Welcome to HaNoi</h4>
              <h2>{house.nameHouse ? house.nameHouse : ""} </h2>
              <p>{house.description ? house.description : ""}</p>
              <div class="main-button">
                <Link href="about.html">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="more-info reservation-info">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="info-item">
                <i class="fa fa-phone"></i>
                <h4>Make a Phone Call</h4>
                <a href="#">{house.user ? house.user.phoneNumber : ""}</a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="info-item">
                <i class="fa fa-map-marker"></i>
                <h4>Address</h4>
                <h6>
                  {house.city ? house.city.name : ""},
                  {house.district ? house.district.name : ""},
                  {house.wards ? house.wards.name : ""}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reservation-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={"col-lg-12"}>
                {house.image
                  ? house.image.map((item) => <img src={item.imageURL} />)
                  : ""}
              </div>
            </div>
            <div className="col-lg-12">
              <Formik
                initialValues={{
                  userId: user.id,
                  price: house.price,
                  cost: cost,
                  houseId: id,
                  status: 3,
                }}
                onSubmit={(values) => {
                  dispatch(createContract(values));
                }}>
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h4>
                          Make Your <em>Reservation</em> Through This{" "}
                          <em>Form</em>
                        </h4>
                      </div>
                      {/*<div className={"col-lg-12"}>*/}
                      {/*    {JSON.stringify(values)}*/}
                      {/*</div>*/}
                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="Name" className="form-label">
                            Your Name
                          </label>
                          <Field
                            type="text"
                            name="Name"
                            className="Name input"
                            value={user.username}
                            autoComplete="on"
                            readOnly
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="Number" className="form-label">
                            Price
                          </label>
                          <Field
                            className="input"
                            value={house.price}
                            type="number"
                            readOnly
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <DateRangePicker
                          defaultValue={[
                            dayjs("2023-06-1"),
                            dayjs("2023-06-11"),
                          ]}
                          onChange={(value) => {
                            if (value) {
                              if (value[1]) {
                                const startDate = value[0]["$d"]
                                  ? value[0]["$d"]
                                  : "2023-06-1";
                                const endDate = value[1]["$d"]
                                  ? value[1]["$d"]
                                  : "2023-06-11";
                                let days =
                                  daysBetweenDates(startDate, endDate) + 1;
                                let total =
                                  days * house.price ? days * house.price : 0;
                                setFieldValue("startDay", startDate);
                                setFieldValue("endDay", endDate);
                                setCost(total);
                                setFieldValue("cost", total);
                                setFieldValue("price", house.price);
                              }
                            }
                          }}
                        />
                      </div>

                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="Number" className="form-label">
                            Total{" "}
                          </label>
                          <Field className="input" value={cost} required />
                        </fieldset>
                      </div>

                      <div className="col-lg-6">
                        <fieldset>
                          <label
                            htmlFor="Number"
                            className="form-label"></label>
                          <Field
                            className="input"
                            type="hidden"
                            value={house.id}
                            required
                          />
                        </fieldset>
                      </div>

                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" className="main-button">
                            Make Your Reservation Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
    </>
  );
}
