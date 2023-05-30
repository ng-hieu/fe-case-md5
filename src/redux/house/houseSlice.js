import { createSlice } from '@reduxjs/toolkit'
import { getAllHouse } from '../../service/houseService'

const initialState = {
    listHouse: []
}

const houseSlice = createSlice({
    name:'houseList',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllHouse.fulfilled, (currentState, action) => {
            currentState.listHouse = action.payload
        })
    }
})
const houseReducer = houseSlice.reducer
export default houseReducer;