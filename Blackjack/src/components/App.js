import React from "react";
import Status from "./Status";
import Tracker from "./Tracker";
import Table from "./Table";
import ButtonSetUp from "./ButtonSetUp";

const App = () => (
  <div className="appFullDiv">
    <div className="appRow appRowOne">
      <Status />

      <Tracker />
    </div>

    <div className="appRow appRowTwo">
      <Table />

      <ButtonSetUp />
    </div>
  </div>
);

export default App;
