import React from "react";
import "./App.css";
import ReduxComponent from "./redux_store/ReduxComponent";
import MobXComponent from "./mobx_store/MobXComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReduxComponent />
        <>
          -------------------------------------------------------------------------------------------------
        </>
        <MobXComponent />
      </header>
    </div>
  );
}

export default App;
