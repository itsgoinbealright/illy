import React from "react";
import illy from "./images/illy.jpg";
import "./App.css";

function App() {
  return <div className="App" style={{ backgroundImage: `url(${illy})` }} />;
}

export default App;
