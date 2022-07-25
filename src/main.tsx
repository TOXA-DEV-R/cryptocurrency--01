/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./app/store";

const root: HTMLElement | null = document.getElementById("root");
const dom = ReactDOM.createRoot(root as HTMLElement);

dom.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
