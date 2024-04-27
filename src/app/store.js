import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import usersSlice from '../features/users/usersSlice';
import Middleware from '../Middleware/Middleware';



const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice
  },
  middleware: Middleware
})

export default store;