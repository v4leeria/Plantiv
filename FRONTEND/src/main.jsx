import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext/CartContext.jsx";
import { ProductProvider } from "./context/ProductContext/ProductContext.jsx";
import { UserProvider } from "./context/UserContext/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
