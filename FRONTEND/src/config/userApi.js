import axios from "./axiosInstance";

// Registro de usuario
export const registerUser = async (userData) => {
  const response = await axios.post("/auth/register", userData);
  return response.data;
};

// Login de usuario
export const loginUser = async (credentials) => {
  const response = await axios.post("/auth/login", credentials);
  return response.data;
};

// Obtener información del perfil
export const getProfile = async () => {
  const response = await axios.get("/auth/profile");
  return response.data;
};
