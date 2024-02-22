import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ProductContext from "./context/ProductContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <BrowserRouter>
      <ProductContext>
        <App />
        <MainRoutes />
      </ProductContext>
    </BrowserRouter>
  </AuthContext>
);
