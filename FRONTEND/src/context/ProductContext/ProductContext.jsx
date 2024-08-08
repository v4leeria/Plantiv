import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../config/axiosInstance";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/store/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await axios.post("/store/products", product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
