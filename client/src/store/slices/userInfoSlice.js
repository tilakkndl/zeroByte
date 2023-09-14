import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
};

export const counterSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = counterSlice.actions;

export default counterSlice.reducer;
