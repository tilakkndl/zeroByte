import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import userInfoReducer from './slices/userInfoSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
  },
});
