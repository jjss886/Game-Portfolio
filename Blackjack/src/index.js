import React from "react";
import { render } from "react-dom";

import "./ast/style.css";
import Table from "./components/Table";

render(
  <div className="mainReactDiv">
    <Table />
  </div>,
  document.getElementById("app")
);
