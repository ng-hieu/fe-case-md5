import { createSlice } from '@reduxjs/toolkit'
import { EditHouseById, createHouse, deleteHouse, findHouseById, getAllHouse, listOFHouseForRent } from '../../service/houseService'
import { filterHouse,  } from "../../service/houseService";
import { getHouseById } from '../../service/houseService'

const initialState = {
    listHouse: [],
    house:{},
    arrHouse:[]
}

const houseSlice = createSlice({
    name:'houseList',
    initialState,
    reducers: {
        setSortOrder: (currentState, action) => {
          currentState.sortOrder = action.payload;
        },
      },
    extraReducers: (builder) => {
        builder.addCase(getAllHouse.fulfilled, (currentState, action) => {
            currentState.listHouse = action.payload
        })
        builder.addCase(createHouse.fulfilled,(state,action) => {
            state.listHouse.push(action.payload)
        })
        builder.addCase(deleteHouse.fulfilled,(state,action) => {
            let index = state.listHouse.findIndex(item => item.id=== action.payload.id);
            state.li.splice(index, 1);
        })
        builder.addCase(findHouseById.fulfilled,(state,action) =>{
            state.house = action.payload
        })
        builder.addCase(getHouseById.fulfilled,(state,action) =>{
            state.house = action.payload
        })
        builder.addCase(listOFHouseForRent.fulfilled,(state,action) =>{
            state.listHouse = action.payload
        })


    }
})

export const { setSortOrder } = houseSlice.actions;
const houseReducer = houseSlice.reducer;
export default houseReducer;
