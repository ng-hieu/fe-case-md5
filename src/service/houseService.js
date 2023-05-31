
import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getAllHouse = createAsyncThunk("house/getAllHouse", async () => {
  const res = await customAPI.get("house");
  return res.data;
});

export const getHouseById = createAsyncThunk(
  "house/showHouseById",
  async (id) => {
    const response = await customAPI.get(`house/${id}`);
    return response.data;
  }
);
export const getDistrict = createAsyncThunk(
    "house/district",
    async () => {
        const response = await customAPI.get(`house/district`);
        return response.data;
    }
);
export const getWards = createAsyncThunk(
    "house/wards",
    async (id) => {
        const response = await customAPI.get(`house/wards/${id}`);
        return response.data;
    }
);

export const createHouse = createAsyncThunk("house/createHouse", async (value) => {
    console.log(value)
  await customAPI.post("house",value);
  return value;
});

export const deleteHouse = createAsyncThunk("house/deleteHouse", async (id) => {
  await customAPI.delete(`house/${id}`);
  return id;
});
export const EditHouseById = createAsyncThunk(
  "house/EditHouseById",
  async (arg) => {
    await customAPI.put(`house/${arg.id}`, arg.value);
    return arg.value;
  }
);

