import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getContractById = createAsyncThunk(
  "contract/getContractById",
  async () => {
    const res = customAPI.get("contracts");
    return res.data;
  }
);
export const getContracById = createAsyncThunk(
  "contract/getContracById",
  async (id) => {
    const res = customAPI.get(`contract${id}`);
    return res.data;
  }
);
export const createContrac = createAsyncThunk("contract/createContrac", async (value) => {
    const res=customAPI.post(`contract`,value)
    return res.data
})