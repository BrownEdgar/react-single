import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addCounter: (state, action) => {
      return state + action.payload;
    },
    minusCounter: (state, action) => {
      return state - 1;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/getAsyncUsers/fulfilled'),
      (state, action) => {
        return action.payload.length
      },
    )

  },
  selectors: {
    getCounter: (state) => state // state  == initialState == 0
  }
})


export const { addCounter, minusCounter } = counterSlice.actions;
export const { getCounter } = counterSlice.selectors;
export default counterSlice.reducer;

