import { createSlice } from '@reduxjs/toolkit'
import { getAllHouse } from '../../service/houseService'
import { getHouseById } from '../../service/houseService'
const initialState = {
    listHouse: [],
    house:{}
}

const houseSlice = createSlice({
    name:'houseList',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllHouse.fulfilled, (currentState, action) => {
            currentState.listHouse = action.payload
        });
        builder.addCase(getHouseById.fulfilled, (currentState, action) => {
            currentState.house = action.payload
        });
    }

})
const houseReducer = houseSlice.reducer
export default houseReducer;