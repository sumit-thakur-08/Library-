import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi, loginUserApi } from "../../services/authService";

// registration
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await registerUserApi(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed",
      );
    }
  },
);

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await loginUserApi(data);

      // 🔥 BACKEND RESPONSE STRUCTURE MATCH
      const { accessToken, user } = res.data.data;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", user.role);

      return {
        token: accessToken,
        user,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);
