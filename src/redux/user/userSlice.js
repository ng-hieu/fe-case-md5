import { createSlice } from "@reduxjs/toolkit";
import { login, registerUser } from "../../service/userService";
const initialState = {
  currenState: JSON.parse(localStorage.getItem("user"))
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currenState = action.payload;
      localStorage.setItem("user",JSON.stringify(action.payload))
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.currenState = action.payload;
    });
  },
});
export default userSlice.reducer