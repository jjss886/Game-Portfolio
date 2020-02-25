import React from "react";
import Tracker from "./Tracker";
import Table from "./Table";
import ButtonSetUp from "./ButtonSetUp";
import EndMessage from "./EndMessage";

const App = () => (
  <div className="appFullDiv">
    <EndMessage />

    <div className="appRow appRowOne">
      <Tracker />
    </div>

    <div className="appRow appRowTwo">
      <Table />

      <ButtonSetUp />
    </div>
  </div>
);

export default App;
