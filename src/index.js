import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// css
import "./styles/App.css";
import "./styles/normalize.css";
// product provider
import ProductProvider from "./contexts/ProductContext";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </SidebarProvider>
  </React.StrictMode>
);
