import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/Home/App";
import {GlobalStyles} from "./styles/globalStyles"

ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
