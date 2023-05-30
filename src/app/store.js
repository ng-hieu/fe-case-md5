import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import houseReducer from "../redux/house/houseSlice";


export const store = configureStore({
  reducer: {
    houseList: houseReducer,
    user: userReducer

  },
});
