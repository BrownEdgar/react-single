import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 1000,
  reducers: {
    addCount: (state, action)=>{
      return state + action.payload
    },
    minusCount: (state,action)=>{
      return state - action.payload
    }
  },
  extraReducers: (builder)=>{},
  selectors:{
    getCounter: (state)=>state
  }
})

export default counterSlice.reducer
export const {addCount,minusCount} = counterSlice.actions
export const {getCounter} =counterSlice.selectors