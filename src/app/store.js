import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chooseSlice from '@f/chooseUs/chooseSlice';
import counterSlice from '@f/counter/counterSlice';
import usersSlice from '@f/users/usersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['choose'],
}

const rootReducer = combineReducers({
  counter: counterSlice,
  users: usersSlice,
  choose: chooseSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export default store;
export const persistor = persistStore(store)