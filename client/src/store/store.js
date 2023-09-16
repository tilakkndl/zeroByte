import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import expandSidebarReducer from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    expandSidebar: expandSidebarReducer,
  },
});
