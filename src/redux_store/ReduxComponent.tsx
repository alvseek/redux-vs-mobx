import React from "react";
import { Provider } from "react-redux";
import SpaceX from "./components/SpaceX/SpaceX";
import { store } from "./redux/store";

const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <SpaceX />
    </Provider>
  );
};

export default ReduxComponent;
