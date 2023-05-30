import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { getAllHouse } from "../service/houseService";
export function HouseList(){
    const dispatch = useDispatch()
    const house = useSelector(({houseList}) => {
        console.log("houseList.listHouse", houseList.listHouse)
        return houseList.listHouse
    })  
    useEffect(() => {
        dispatch(getAllHouse())
    },[])
}