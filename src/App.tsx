import React from "react";
import "./App.css";
import ReduxComponent from "./redux_store/ReduxComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* INSERT REDUX_COMPONENT.tsx LOAD HERE */}
        <ReduxComponent />

        {/* INSERT MOBX_COMPONENT.tsx LOAD HERE */}
      </header>
    </div>
  );
}

export default App;
