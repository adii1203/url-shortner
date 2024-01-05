import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api/helper";
import toast from "react-hot-toast";

export const creatLink = createAsyncThunk(
  "link/creatlink",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Api.post(
        "/link/short",
        { link: data.originUrl },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1YjE5MzcxMDY4ZmQ5YmMyMjA1MGIiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA0MzY2NTc0LCJleHAiOjE3MDQzNjY4NzR9.0s29MC4d4y_EJcwMgD6Bw-z_wQTPUIwS09hbORo9RTw`,
          },
        }
      );
      console.log(res.data);
      toast.success("Link created successfully");
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      if (error && error.responce) {
        return rejectWithValue(error.responce);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
