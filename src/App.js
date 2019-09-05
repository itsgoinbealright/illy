import React from "react";

import illy from "./images/illy.jpg";
import "./App.css";

var style = {
  height: "100vh"
};

function App() {
  return (
    <div className="App">
      <img src={illy} alt="illy" style={style} />
    </div>
  );
}

export default App;
