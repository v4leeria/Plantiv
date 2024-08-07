import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser({ ...response.data, token });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
      setLoading(false); // Finaliza la carga
    };

    fetchUser();
  }, []);

  const register = async (userData) => {
    try {
      await axios.post("/auth/register", userData);
      navigate("/login"); // Redirige a la página de login después del registro
    } catch (error) {
      console.error("Error al registrarse:", error);
      throw new Error("Error al registrarse. Verifica los datos ingresados.");
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post("/auth/login", userData);
      localStorage.setItem("token", response.data.token);
      const userResponse = await axios.get("/auth/me", {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
      setUser({ ...userResponse.data, token: response.data.token });
      navigate("/profile"); // Redirige a la página principal o a la deseada
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
