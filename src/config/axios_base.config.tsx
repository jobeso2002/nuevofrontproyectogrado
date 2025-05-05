// src/config/axios_base.config.ts

import { decryptData } from "@/store/decrypt/decryptData"; 
import axios from "axios";

// Asegúrate de que esta URL coincida con tu backend (puerto 4001 según tu código)
const config = import.meta.env.VITE_API_BASE_URL || "http://localhost:4001";

export const Api = axios.create({
  baseURL: config,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
   
Api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decryptedToken = decryptData(token);
        config.headers["Authorization"] = `Bearer ${decryptedToken}`;
      } catch (error) {
        console.error("Error al desencriptar el token:", error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Api.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Solo agregar el token si parece un JWT válido
//       if (token.split('.').length === 3) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
  