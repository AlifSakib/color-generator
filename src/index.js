import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContext from "./contexts/AuthContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>
);
