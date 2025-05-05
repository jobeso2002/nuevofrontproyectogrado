// src/store/authstore.ts

import { create } from "zustand";
import { decryptData, encryptData } from "./decrypt/decryptData";
import { jwtDecode } from 'jwt-decode';
import { loginService,  } from "@/services/auth/auth.service";

interface AuthState {
  user: { 
    id: number;
    email: string; 
    username: string;
    role: {
      id: number;
      name: string;
    }; 
  } | null;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  error: null,
  isAuthenticated: false,
  loading: true,

  initializeAuth: () => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const decryptedToken = decryptData(storedToken);
        console.log(decryptedToken)
        const decryptedUser = decryptData(storedUser);

        set({
          user: decryptedUser,
          token: decryptedToken,
          isAuthenticated: true,
          error: null,
          loading: false,
        });
      } catch (error) {
        console.error("Error al desencriptar los datos:", error);
        set({ loading: false });
      }
    } else {
      set({ loading: false });
    }
  },

  login: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await loginService(data);
      const token = response.token;
      
      console.log("Token recibido:", token); // Verifica que el token sea válido
      
      // Decodificar el token para verificar que es válido
      const decoded = jwtDecode(token); // Sin tipo primero para verificar
      
      console.log("Token decodificado:", decoded);
      
      // Ahora sí con tipo
      const typedDecoded = jwtDecode<{
        id: number;
        email: string;
        username: string;
        role: {
          id: number;
          name: string;
        };
      }>(token);
  
      // Verificar que el token no fue modificado por la encriptación
      const encryptedToken = encryptData(token);
      const decryptedToken = decryptData(encryptedToken);
      
      console.log("Token original vs decriptado:", token === decryptedToken); // Debe ser true
  
      // Guardar en localStorage
      localStorage.setItem("token", encryptedToken);
      localStorage.setItem("user", encryptData(typedDecoded));
  
      set({
        user: typedDecoded,
        token,
        isAuthenticated: true,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      console.error("Detalles del error:", error.response?.data);
      set({
        error: error.response?.data?.message || "Credenciales inválidas",
        isAuthenticated: false,
        loading: false,
      });
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
      loading: false,
    });
  },
}));