// src/redux-store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  token: string | null;
  isLoggedIn: boolean;
}

export const initialState: UserState = {
  email: '',
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify({ email: state.email, token: state.token, isLoggedIn: state.isLoggedIn }));
    },
    logout: (state) => {
      state.email = '';
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
    },
    initializeUser: (state, action: PayloadAction<{ email: string; token: string | null; isLoggedIn: boolean }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { login, logout, initializeUser } = userSlice.actions;
export default userSlice.reducer;
