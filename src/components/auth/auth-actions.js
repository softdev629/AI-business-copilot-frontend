import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const login = createAsyncThunk("/auth/login", async (payload) => {
  const { data } = await api.post(`/auth/login`, payload);
  localStorage.setItem("token", data.access_token);
  return data;
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
