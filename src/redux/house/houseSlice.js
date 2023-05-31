import { createSlice } from '@reduxjs/toolkit'
import { EditHouseById, createHouse, deleteHouse, findHouseById, getAllHouse } from '../../service/houseService'

const initialState = {
    listHouse: [],
    house : {}
}

const houseSlice = createSlice({
    name:'houseList',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllHouse.fulfilled, (currentState, action) => {
            currentState.listHouse = action.payload
        })
        builder.addCase(createHouse.fulfilled,(state,action) => {
            state.listHouse.push(action.payload)
        })
        builder.addCase(deleteHouse.fulfilled,(state,action) => {
            state.listHouse.splice(action.payload,1)
        })
        builder.addCase(findHouseById.fulfilled,(state,action) =>{
            console.log(action.payload,7)
            state.house = action.payload
        })


    }
})
const houseReducer = houseSlice.reducer
export default houseReducer;