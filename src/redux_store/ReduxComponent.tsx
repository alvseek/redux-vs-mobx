import React from "react";
import { Provider } from "react-redux";
import SpaceX from "./SpaceX";
import { store } from "./store";

const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <SpaceX />
    </Provider>
  );
};

export default ReduxComponent;
