import { createSlice } from '@reduxjs/toolkit'
import {findHouseById, getAllHouse, openHouse} from '../../service/houseService'
import { getHouseById } from '../../service/houseService'
import { createHouse } from '../../service/houseService'
import { deleteHouse } from '../../service/houseService'
import { listOFHouseForRent } from '../../service/houseService'

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
        builder.addCase(findHouseById.fulfilled,(state,action) =>{
            state.house = action.payload
        })
        builder.addCase(getHouseById.fulfilled,(state,action) =>{
            state.house = action.payload
        })
        builder.addCase(listOFHouseForRent.fulfilled,(state,action) =>{
            state.listHouse = action.payload
        })
        builder.addCase(openHouse.fulfilled,(state,action) =>{
            state.house = action.payload
        })

    }
})

export const { setSortOrder } = houseSlice.actions;
const houseReducer = houseSlice.reducer;
export default houseReducer;
