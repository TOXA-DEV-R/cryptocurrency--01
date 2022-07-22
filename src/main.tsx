/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

const root: HTMLElement | null = document.getElementById("root");
const dom = ReactDOM.createRoot(root as HTMLElement);

dom.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
