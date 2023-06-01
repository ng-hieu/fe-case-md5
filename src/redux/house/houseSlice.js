import { createSlice } from '@reduxjs/toolkit'
import { getAllHouse } from '../../service/houseService'
import { getHouseById } from '../../service/houseService'
const initialState = {
    listHouse: [],
    house:{}
}

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
