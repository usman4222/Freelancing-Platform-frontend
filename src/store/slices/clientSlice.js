import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    // Register actions
    REGISTER_CLIENT_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    REGISTER_CLIENT_SUCCESS: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    REGISTER_CLIENT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Something went wrong during registration!";
    },

    // Login actions
    LOGIN_CLIENT_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    LOGIN_CLIENT_SUCCESS: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    LOGIN_CLIENT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Login failed! Please try again.";
    },

    // Logout actions
    LOGOUT_SUCCESS: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    LOGOUT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  REGISTER_CLIENT_REQUEST,
  REGISTER_CLIENT_SUCCESS,
  REGISTER_CLIENT_FAIL,
  LOGIN_CLIENT_REQUEST,
  LOGIN_CLIENT_SUCCESS,
  LOGIN_CLIENT_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} = clientSlice.actions;

export default clientSlice.reducer;
