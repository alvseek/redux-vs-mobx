import { createSlice } from "@reduxjs/toolkit";
import { LaunchState } from "../interface/ILaunchState";
import { getLaunches } from "./spacexThunk";

const initialState: LaunchState = {
  isLoadingGetLaunch: false,
  launch: null,
  links: null,
  payloads: [],
  errorGetLaunch: null,
};

export const spacexSlice = createSlice({
  name: "spacex",
  initialState,
  reducers: {
    changePayload: (state, action) => {
      state.payloads = [...action.payload];
    },
  },
  extraReducers: {
    [getLaunches.pending.toString()]: (state) => {
      state.isLoadingGetLaunch = true;
    },
    [getLaunches.fulfilled.toString()]: (state, { payload }) => {
      state.isLoadingGetLaunch = false;
      let res = payload.data;
      state.links = res.links;
      state.payloads = res.payloads;
    },
    [getLaunches.rejected.toString()]: (state, { payload }) => {
      state.isLoadingGetLaunch = false;
      state.errorGetLaunch = payload;
    },
  },
});

export const { changePayload } = spacexSlice.actions;

export default spacexSlice.reducer;
