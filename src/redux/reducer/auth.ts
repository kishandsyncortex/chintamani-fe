/* eslint-disable no-undef */
import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: "",
  user: {}
}

const authSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
  handleLogin: (state, action) => {
      console.log("🚀 ~ file: category.ts:16 ~ action:", action)
      state.token = action.payload?.accessToken
      state.user = action.payload?.qurey
    },
},
    extraReducers: (builder) => {
      
    }
  });
  // eslint-disable-next-line no-empty-pattern
  export const {handleLogin } = authSlice.actions;
  
  export default authSlice.reducer;
