import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./ast/style.css";
import Tetris from "./components/Tetris";

render(
  <div className="mainReactDiv">
    <Tetris />
  </div>,
  document.getElementById("app")
);
