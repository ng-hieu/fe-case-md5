import { createSlice } from "@reduxjs/toolkit";
import { ShowProfileUser, login, registerUser } from "../../service/userService";
const initialState = {
  currenState: JSON.parse(localStorage.getItem("user")),
  current : {}
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state) => {
      state.currenState = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currenState = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.currenState = action.payload;
    });
    builder.addCase(ShowProfileUser.fulfilled,(state,action) => {
    console.log(action.payload,8888)
      state.current = action.payload;
    })
  },
});
export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
