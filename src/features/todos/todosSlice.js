import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos",
  async ()=>{
    return axios("https://jsonplaceholder.typicode.com/todos?_limit=20")
    .then(res=>res.data)
  }
)

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    remove:(state,action)=>{
      return state.filter(elem=> elem.id !== action.payload)
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getAsyncTodos.fulfilled, (state, action)=>{
      state.push(...action.payload)
    })
  },
  selectors:{
    getTodos: (state)=>state
  }
})

export default todosSlice.reducer
export const {getTodos} = todosSlice.selectors
export const {remove} = todosSlice.actions