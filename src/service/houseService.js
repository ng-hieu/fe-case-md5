import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";
import axios from "axios";

export const getAllHouse = createAsyncThunk("house/getAllHouse", async () => {
  const res = await customAPI.get("house");
  return res.data;
});

export const getHouseById = createAsyncThunk(
  "house/showHouseById",
  async (id) => {
    console.log(id, "da vao getHousebyHouse");
    const response = await customAPI.get(`house/${id}`);
    return response.data;
  }
);

export const getWards = createAsyncThunk("house/wards", async (id) => {
  const response = await customAPI.get(`house/wards/${id}`);
  return response.data;
});
export const createHouse = createAsyncThunk(
  "house/createHouse",
  async (value) => {
    console.log(value);
    await customAPI.post("house", value);
    return value;
  }
);
export const deleteHouse = createAsyncThunk("house/deleteHouse", async (id) => {
  let abc = await customAPI.delete(`/house/${id}`);
  console.log(abc, 22);
  return id;
});
export const editHouseById = createAsyncThunk(
  "house/EditHouseById",
  async (arg) => {
    await customAPI.put(`house/${arg.id}`, arg.house);
    return arg.values;
  }
);
export const findHouseById = createAsyncThunk(
  "house/findHouseById",
  async (id) => {
    const res = await customAPI.get(`/house/${id}`);
    return res.data;
  }
);
