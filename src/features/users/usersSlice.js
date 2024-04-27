import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import gelAsyncUsers from './usersAPI';


export const getAsyncUsers = createAsyncThunk('users/getAsyncUsers', gelAsyncUsers)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: 'idle'
  },

  reducers: {
    addUser: (state, action) => {
      // return {
      //   data: [...state.data, action.payload]
      // }
      state.data.push(action.payload)
    },
    saveUsers: (state, action) => {
      state.data.push(...action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(getAsyncUsers.rejected, (state, { error }) => {
        state.status = 'rejected';
        console.log(error)
      })
  },
  selectors: {
    getAllusers: (state) => state.data
  }

})

export default usersSlice.reducer;
export const { addUser, saveUsers } = usersSlice.actions
export const { getAllusers } = usersSlice.selectors