import React from "react";

import "./App.css";

//import necessary components
import Clock from "./components/clock/clock.component";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Pomodoro Clock</h1>
      <Clock />
    </div>
  );
}

export default App;
