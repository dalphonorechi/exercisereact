import { createSlice } from '@reduxjs/toolkit'


export const indicatorSlice = createSlice({
    name:"indicator",
    initialState:{
        value:-1
    },
    reducers:{
        selectCreateUser: (state)=>{
            state.value = 1
        },
        selectAllUser: (state)=>{
            state.value = 2
        },
    }
})

export const {selectAllUser,selectCreateUser} = indicatorSlice.actions

export default indicatorSlice.reducer