import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { Provider, stores } from "./stores";

import "setimmediate";

import "core-js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider value={stores}>
    <App />
  </Provider>
);
