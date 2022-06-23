import { createSlice } from "@reduxjs/toolkit";
import { getLaunches } from "../thunk/spacexThunk";

export interface LaunchState {
  isLoadingGetLaunch: boolean;
  launch: {
    name?: string;
    links?: string[];
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
      let links: string[] = [];
      let res = payload.data;
      for (let key in res.links) {
        switch (key) {
          case "patch":
            links = [...links, res.links.patch.large];
            break;
          case "reddit":
            links = [...links, res.links.reddit.launch];
            break;
          case "webcast":
            links = [...links, res.links.webcast];
            break;
          case "wikipedia":
            links = [...links, res.links.wikipedia];
            break;
          default:
            break;
        }
      }
      state.launch = {
        name: res.name,
        links,
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
