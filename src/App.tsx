import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MobXComponent from "./mobx_store/MobXComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* INSERT REDUX_COMPONENT.tsx LOAD HERE */}

        <MobXComponent />
      </header>
    </div>
  );
}

export default App;
