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
    const response = await customAPI.get(`house/${id}`);
    return response.data;
  }
);

export const createHouse = createAsyncThunk(
  "house/createHouse",
  async (value) => {
    const res = await customAPI.post("house", value);
    return res.data;
  }
);

export const deleteHouse = createAsyncThunk("house/deleteHouse", async (id) => {
  let abc = await customAPI.delete(`/house/${id}`);
  console.log(abc, 22);
  return id;
});
export const EditHouseById = createAsyncThunk(
  "house/EditHouseById",
  async (arg) => {
    await customAPI.put(`house/${arg.id}`, arg.value);
    return arg.value;
  }
);

export const listOFHouseForRent = createAsyncThunk(
  "house/ListOfHouseForRent",
  async (id) => {
    const res = await customAPI.get(`house/user/${id}`);
    return res.data;
  }
);

export const findHouseById = createAsyncThunk(
  "house/findHouseById",
  async (id) => {
    const res = await customAPI.get(`/house/${id}`);
    return res.data;
  }
);

// export const filterHouse = createAsyncThunk("house/filterHouse", async () => {
//   const res = await customAPI.get("house/search");
//   return res.data;
// });
