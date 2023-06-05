import { createSlice } from "@reduxjs/toolkit";
import { login, registerUser } from "../../service/userService";
import { ShowProfileUser} from "../../service/userService";
import {showAllUsers } from "../../service/userService";
const initialState = {
  currenState: JSON.parse(localStorage.getItem("user")),
  current : {},
  listUsers: []
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
    });
    builder.addCase(showAllUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload
  })
  },
});
export const { deleteUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer
