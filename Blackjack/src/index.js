import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./ast/style.css";
import Table from "./components/Table";

render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById("app")
);
