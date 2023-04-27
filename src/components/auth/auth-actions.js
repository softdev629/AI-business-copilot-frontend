import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { history } from "../../utils/history";

export const login = createAsyncThunk("/auth/login", async (payload) => {
  const { data } = await api.post(`/auth/login`, payload);
  localStorage.setItem("token", data.access_token);
  history.navigate("/home");
});

export const fetchUserData = createAsyncThunk(
  "/auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const { data } = await api.get("/auth/user");
      return data;
    } catch (e) {
      localStorage.removeItem("token");
      return rejectWithValue("");
    }
  }
);
