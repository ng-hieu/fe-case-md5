import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";
import {axios} from "axios";

export const login = createAsyncThunk(
  "user/login",
  console.log("da vao den login"),
  async (user) => {
    const response = await axios.post(`http://localhost:8000/login`,user);
    // const response = await customAPI.post(`login`,user);
    return response.data;
  }
);
export const registerUser = createAsyncThunk(
    "user/register",
    console.log("da vao den create"),
    async (user) => {
      const response = await customAPI.post(`register`,user);
      return response.data;
    }
  );


