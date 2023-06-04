import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {deleteHouse, listOFHouseForRent, openHouse} from "../service/houseService";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {styled} from "@mui/material/styles";

export function ListOFHouseForRent() {
    const dispatch = useDispatch();
    const house = useSelector(({houseList}) => {

        return houseList.listHouse;
    });
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const [status, setStatus] = useState(); // d
    if (house.houseStatus){
        if (house.houseStatus["id"]===3){
            setStatus(3)
        }else {
            setStatus(4)
        }

    }

    const AntSwitch = styled(Switch)(({theme}) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));


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
                                <h2 style={{color: "white"}}>Welcome to Hanoi</h2>
                                <p>Have a nice trip</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="items">
                                <div className="row">
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
                                                        <FormGroup>
                                                            <Stack
                                                                direction="row"
                                                                spacing={1}
                                                                alignItems="center"
                                                            >
                                                                <Typography>Close</Typography>
                                                                <Switch
                                                                    checked={item.houseStatus.id === 3} // "open" if houseStatus = 3, otherwise "close"
                                                                    onChange={() => {
                                                                        const newStatus =
                                                                            item.houseStatus.id === 3 ? 4 : 3;
                                                                        if (newStatus===3){
                                                                            setStatus(4)
                                                                            dispatch(openHouse(+item.id));

                                                                        }
                                                                        else {
                                                                            setStatus(3)
                                                                            dispatch(deleteHouse(+item.id));

                                                                        }
                                                                        dispatch(listOFHouseForRent(userId));
                                                                    }}
                                                                />
                                                                <Typography>Open</Typography>
                                                            </Stack>
                                                        </FormGroup>
                                                        <div className="right-content">
                                                            <h4>{item.nameHouse}</h4>
                                                            {/* <span>{item.district.name}</span> */}
                                                            <p>{item.description}</p>
                                                            <p>{item.user && item.user.name}</p>
                                                            <ul className="info">
                                                                <li>
                                                                    <i className="fa fa-user"/> 8.66 Mil People
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-globe"/> {item.area}m2
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-home"/>
                                                                    {item.price} VND
                                                                </li>
                                                            </ul>
                                                            <button>
                                                                <Link to={`/home/edit/${item.id}`}>Edit</Link>
                                                            </button>
                                                            <button
                                                                // onClick={() => dispatch(deleteHouse(item.id))}
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
                                                style={{border: 0, borderRadius: "23px"}}
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