import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: localStorage.getItem('username') || null,
    email: localStorage.getItem('email') || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload.username, email: action.payload.email };
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('email', action.payload.email);
    },
    logout: (state) => {
      state.user = { username: null, email: null };
      localStorage.removeItem('username');
      localStorage.removeItem('auth');
      localStorage.removeItem('email');
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;
