import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";   // 👈 ADD THIS
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>   {/* 👈 WRAP APP */}
      <App />
    </HashRouter>
  </React.StrictMode>
);