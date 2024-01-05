import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api/helper";
import toast from "react-hot-toast";

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (data, { rejectWithValue }) => {
    try {
      const { email, password } = data;
      const res = await Api.post("/user/login", { email, password });
      toast.success("Login Success");
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      return rejectWithValue(
        error?.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    }
  }
);

export const fetchUserLinks = createAsyncThunk(
  "user/fetchUserLinks",
  async (authToken, { rejectWithValue }) => {
    try {
      const res = await Api.get("link/fatchlinks", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      if (error && error.responce) {
        return rejectWithValue(error.responce);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
