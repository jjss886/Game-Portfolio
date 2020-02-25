import React from "react";
import Status from "./Status";
import Tracker from "./Tracker";
import Table from "./Table";
import ButtonSetUp from "./ButtonSetUp";
import Message from "./Message";

const App = () => (
  <div className="appFullDiv">
    <Message />

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
