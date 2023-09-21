import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subract, divide, subtract } from "./math";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(6, 3)}</li>
    <li>{divide(8, 4)}</li>
  </ul>,

  document.getElementById("root")
);
