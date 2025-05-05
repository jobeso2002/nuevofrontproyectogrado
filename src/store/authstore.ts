// src/store/authstore.ts

import { create } from "zustand";
import { decryptData, encryptData } from "./decrypt/decryptData";
import { jwtDecode } from 'jwt-decode';
import { loginService, registerService } from "@/services/auth/auth.service";

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
  register: (data: { username: string; email: string; password: string; id_rol: number }) => Promise<void>;
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
      
      // Decodificar el token para obtener la información del usuario
      const decoded = jwtDecode<{
        id: number;
        email: string;
        username: string;
        role: {
          id: number;
          name: string;
        };
      }>(token);

      // Encriptar y guardar en localStorage
      localStorage.setItem("token", encryptData(token));
      localStorage.setItem("user", encryptData(decoded));

      set({
        user: decoded,
        token,
        isAuthenticated: true,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Credenciales inválidas",
        isAuthenticated: false,
        loading: false,
      });
      throw error;
    }
  },

  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await registerService(data);
      const token = response.token;
      
      const decoded = jwtDecode<{
        id: number;
        email: string;
        username: string;
        role: {
          id: number;
          name: string;
        };
      }>(token);

      localStorage.setItem("token", encryptData(token));
      localStorage.setItem("user", encryptData(decoded));

      set({
        user: decoded,
        token,
        isAuthenticated: false,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Error en el registro",
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