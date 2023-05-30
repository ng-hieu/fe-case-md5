// import { createAsyncThunk } from "@reduxjs/toolkit";
// import customAPI from "./customAPI";
// export  const  login = createAsyncThunk(
//   "user/login",
//   console.log("da vao den login"),
//   async (user) => {
//     const response = await customAPI.post(`login`,user);
//     return response.data;
//   }
// );
// export const registerUser = createAsyncThunk(
//     "user/registerUser",
//     console.log("da vao den create"),
//     async (user) => {
//       const response = await customAPI.post(`register`,user);
//       return response.data;
//     }
//   );



import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";

let isLoginExecuting = false; // Mutex cho hàm login
let isRegisterExecuting = false; // Mutex cho hàm registerUser

export const login = createAsyncThunk(
  "user/login",
  async (user) => {
    if (isLoginExecuting) {
      // Nếu hàm login đang thực thi, không làm gì hết
      return;
    }

    isLoginExecuting = true;

    try {
      const response = await customAPI.post(`login`, user);
      return response.data;
    } finally {
      isLoginExecuting = false;
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user) => {
    if (isRegisterExecuting) {
      // Nếu hàm registerUser đang thực thi, không làm gì hết
      return;
    }

    isRegisterExecuting = true;

    try {
      const response = await customAPI.post(`register`, user);
      return response.data;
    } finally {
      isRegisterExecuting = false;
    }
  }
);


