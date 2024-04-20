import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addCounter: (state, action) => {
      state.push(action.payload)
    },
    minusCounter: (state, action) => {
      return state - 1;
    }
  },
  extraReducers: (builder) => { },
  selectors: {
    getCounter: (state) => state // state  == initialState == 0
  }
})


export const { addCounter, minusCounter } = counterSlice.actions;
export const { getCounter } = counterSlice.selectors;
export default counterSlice.reducer;

