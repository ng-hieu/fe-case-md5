import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getContractById = createAsyncThunk(
  "contract/getContractById",
  async () => {
    const res = await customAPI.get("contracts");
    return res.data;
  }
);
export const getContracById = createAsyncThunk(
  "contract/getContracById",
  async (id) => {
    const res = await customAPI.get(`contract/${id}`);
    return res.data;
  }
);
export const createContrac = createAsyncThunk(
  "contract/createContrac",
  async (value) => {
    const res = await customAPI.post(`contract`, value);
    return res.data;
  }
);
export const updateContract = createAsyncThunk(
  "contract/updateContract",
  async (arg) => {
    await customAPI.put(`contract/${arg.id}`,arg.value);
  return arg.value
  }
);
