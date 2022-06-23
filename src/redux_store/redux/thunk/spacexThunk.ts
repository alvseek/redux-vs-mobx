import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLaunches = createAsyncThunk(
  "spacex/getLaunches",
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetch(
        "https://api.spacexdata.com/v4/launches/latest"
      );
      const res = await result.json();
      return { data: res, status: result.status };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
