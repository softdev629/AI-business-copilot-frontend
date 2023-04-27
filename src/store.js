import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/auth-slice";

export default configureStore({
  reducer: { auth: authSlice },
  devTools: true,
});
