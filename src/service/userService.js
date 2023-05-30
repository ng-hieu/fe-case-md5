import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";
export  const  login = createAsyncThunk(
  "user/login",
  async (user) => {
    const response = await customAPI.post(`login`,user);
    return response.data;
  }
);
export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user) => {
      const response = await customAPI.post(`register`,user);
      return response.data;
    }
  );


