import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { HashRouter } from "react-router-dom";
Modal.setAppElement("#root");

ReactDOM.render(
  <HashRouter>
        <App />
      </HashRouter>,
  document.getElementById("root")
);
