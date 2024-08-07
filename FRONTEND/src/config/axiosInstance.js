// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5100", // URL base de tu servidor
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Asegúrate de que el token esté almacenado en el localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
