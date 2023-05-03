import { createSlice } from "@reduxjs/toolkit";
import { login, fetchUserData } from "./auth-actions";
import { history } from "../../utils/history";

const initialState = {
  loading: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = null;
      localStorage.removeItem(token);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userData = payload.user;
      history.navigate("/upload/1");
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userData = payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.loading = false;
      state.userData = null;
      localStorage.removeItem("token");
      history.navigate("/login");
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
