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

export const createHouse = createAsyncThunk("house/createHouse", async () => {
  const res = await customAPI.post("house");
  return res.status(200).json({
    message: `create house} successfully`,
  });
});

export const deleteHouse = createAsyncThunk("house/deleteHouse", async (id) => {
  const res = await customAPI.delete(`house/${id}`);
  return res.status(200).json({
    message: `delete house id:${id} successfully`,
  });
});
export const EditHouseById = createAsyncThunk(
  "house/EditHouseById",
  async (id) => {
    const res = await customAPI.put(`house/${id}`);
    return res.status(200).json({
      message: `edit house id:${id} successfully`,
    });
  }
);
