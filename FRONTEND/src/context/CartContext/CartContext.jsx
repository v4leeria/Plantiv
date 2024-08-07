import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../config/axiosInstance";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("/store/cart");
      console.log("Response data:", response.data);
      if (Array.isArray(response.data)) {
        setCartItems(response.data);
      }
    } catch (error) {
      console.error("Error fetching cart items", error);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const response = await axios.post("/store/cart", { productId, quantity });
      console.log("Added to cart:", response.data);
      fetchCartItems(); // Actualiza el carrito después de agregar un producto
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`/store/cart/${productId}`);
      console.log("Removed from cart:", productId);
      fetchCartItems(); // Actualiza el carrito después de eliminar un producto
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, fetchCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
