import {Link, useParams} from "react-router-dom";
import {Navbar} from "../../components/Navbar/navbar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHouseById} from "../../service/houseService";
//  import {Field, Form, Formik} from "formik";

export function Description() {
    const dispatch = useDispatch();
    let user = useSelector(({ user }) => {
        return user.currenState;
    });
    console.log(user)
    const [startDay,setStartDay]=useState('');
    const [endDay,setEndtDay]=useState('');
    // const navigate = useNavigate()
    const {id} = useParams();
    const house = useSelector(({house}) => {

        return house.house;
    });
    console.log(house);
    function daysBetweenDates(startDate, endDate) {
        const oneDay = 24 * 60 * 60 * 1000; // Số milliseconds trong 1 ngày
        const start = new Date(startDate); // Tạo đối tượng Date cho ngày bắt đầu
        const end = new Date(endDate); // Tạo đối tượng Date cho ngày kết thúc
        const diffDays = Math.round(Math.abs((start - end) / oneDay)); // Tính số ngày giữa 2 mốc thời gian và làm tròn đến số nguyên gần nhất
        return diffDays;
    }

   let days =daysBetweenDates(startDay,endDay) +1
    let cost=(days*house.price)? days*house.price :0
    useEffect(() => {
        dispatch(getHouseById(id));
    }, []);
    return (
        <>
            <Navbar></Navbar>

            <div class="second-page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h4> Welcome to HaNoi</h4>
                            <h2>{(house.nameHouse) ? house.nameHouse : ''} </h2>
                            <p>
                                {(house.description) ? house.description : ''}
                            </p>
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
                                <a href="#">{(house.user) ? house.user.phoneNumber : ''}</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="info-item">
                                <i class="fa fa-map-marker"></i>
                                <h4>Address</h4>
                                <h6>{(house.city) ? house.city.name : ''},{(house.district) ? house.district.name : ''},{(house.wards) ? house.wards.name : ''}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="reservation-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img src=""/>
                            <div>
                                {house.image ? house.image.forEach((item) => {

                                   <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5cEC5COLJtFdYgtCEd34VJ8aZE1CpDynew&usqp=CAU'}
                                   />

                                }) :''}
                            </div>





                        </div>
                        <div className="col-lg-12">
                            <form id="reservation-form" name="gs" method="submit" role="search" action="#">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4>Make Your <em>Reservation</em> Through This <em>Form</em></h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Name" className="form-label">Your Name</label>
                                            <input type="text" name="Name" className="Name"
                                                   value={user.username} autoComplete="on" readOnly
                                                   required/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Number" className="form-label">Price</label>
                                            <input value={house.price} type="number" readOnly required/>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Number" className="form-label">Start Day</label>
                                            <input onChange={(e)=>{
                                                console.log(e.target.value)
                                            setStartDay(e.target.value)}
                                            } type="date" name="date" className="date" required/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Number" className="form-label">End Day</label>
                                            <input onChange={(e)=>{
                                                console.log(e.target.value)
                                            setEndtDay(e.target.value)}
                                            } type="date" name="date" className="date" required/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Number" className="form-label">Total </label>
                                            <input  value={cost + " VND"} required/>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Number" className="form-label"></label>
                                            <input  type="hidden" value={house.id} required/>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button className="main-button">Make Your Reservation Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <footer></footer>
        </>
    );
}
