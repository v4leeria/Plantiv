import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarPlantiv from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Products from "./views/Products/Products";
import Profile from "./views/Profile/Profile";
import Cart from "./views/Cart/Cart";
import Publish from "./views/Publish/Publish";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./views/Detail/ProductDetails";
import PrivateRoute from "./config/PrivateRoute";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div className="app-container">
      <NavbarPlantiv />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />

          <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
          <Route
            path="/publish"
            element={<PrivateRoute element={<Publish />} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
