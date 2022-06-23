import { createSlice } from "@reduxjs/toolkit";
import { Ilinks } from "../../../mobx_store/SpaceXStore";
import { getLaunches } from "../thunk/spacexThunk";

export interface LaunchState {
  isLoadingGetLaunch: boolean;
  launch: {
    name?: string;
    links?: Ilinks;
  } | null;
  links: Ilinks | null;
  payloads: string[];
  errorGetLaunch: any;
}

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
