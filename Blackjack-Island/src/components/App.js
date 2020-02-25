import React from "react";
import Tracker from "./Tracker";
import Table from "./Table";
import ButtonSetUp from "./ButtonSetUp";
import EndMessage from "./EndMessage";

const App = () => (
  <div className="appFullDiv">
    <EndMessage />

    <Table />

    <div className="appRow ">
      <ButtonSetUp />

      <Tracker />
    </div>
  </div>
);

export default App;
