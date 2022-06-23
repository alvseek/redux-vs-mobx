import { createSlice } from "@reduxjs/toolkit";
import { Ilinks } from "../../../mobx_store/SpaceXStore";
import { getLaunches } from "../thunk/spacexThunk";

export interface LaunchState {
  isLoadingGetLaunch: boolean;
  launch: {
    name?: string;
    links?: Ilinks;
  } | null;
  errorGetLaunch: any;
}

const initialState: LaunchState = {
  isLoadingGetLaunch: false,
  launch: null,
  errorGetLaunch: null,
};

export const spacexSlice = createSlice({
  name: "spacex",
  initialState,
  reducers: {},
  extraReducers: {
    [getLaunches.pending.toString()]: (state) => {
      state.isLoadingGetLaunch = true;
    },
    [getLaunches.fulfilled.toString()]: (state, { payload }) => {
      state.isLoadingGetLaunch = false;
      let res = payload.data;
      state.launch = {
        name: res.name,
        links: res.links,
      };
    },
    [getLaunches.rejected.toString()]: (state, { payload }) => {
      state.isLoadingGetLaunch = false;
      state.errorGetLaunch = payload;
      console.log(payload);
    },
  },
});

export default spacexSlice.reducer;
