import { createSlice } from "@reduxjs/toolkit";
export const AuthSlice = createSlice({
  name: "Authenticate",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    UPDATE_USER_LOGIN: (state, action) => {
      state.user = action.payload;
    },
    IS_LOGGED_IN: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { UPDATE_USER_LOGIN, IS_LOGGED_IN } =
  AuthSlice.actions;

export default AuthSlice.reducer;
