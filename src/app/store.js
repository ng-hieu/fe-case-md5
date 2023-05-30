import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "../redux/house/houseSlice";

export const store = configureStore({
  reducer: {houseList: houseReducer},
});
