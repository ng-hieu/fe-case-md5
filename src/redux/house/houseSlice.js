import { createSlice } from "@reduxjs/toolkit";
import { filterHouse, getAllHouse } from "../../service/houseService";

const initialState = {
  listHouse: [],
  // filteredListHouse: []
  sortOrder: 1,
};

const houseSlice = createSlice({
  name: "houseList",
  initialState,
  reducers: {
    setSortOrder: (currentState, action) => {
      currentState.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHouse.fulfilled, (currentState, action) => {
      currentState.listHouse = action.payload;
    });
    // builder.addCase(filterHouse.fulfilled, (currentState, action) => {
    //     currentState.filteredListHouse = action.payload
    // })
  },
});
export const { setSortOrder } = houseSlice.actions;
const houseReducer = houseSlice.reducer;
export default houseReducer;
