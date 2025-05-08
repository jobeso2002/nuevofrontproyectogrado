// src/store/authstore.ts

import { create } from "zustand";
import { decryptData, encryptData } from "./decrypt/decryptData";
import { jwtDecode } from "jwt-decode";
import { loginService } from "@/services/auth/auth.service";

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
  
    if (!storedToken || !storedUser) {
      return set({ loading: false });
    }
  
    try {
      // Desencriptar token
      const token = storedToken.includes('.') ? storedToken : decryptData(storedToken);
      if (!token) throw new Error("Token inválido");
  
      // Verificar expiración
      const decoded = jwtDecode(token) as { exp?: number };
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        throw new Error("Token expirado");
      }
  
      // Desencriptar usuario
      const user = decryptData(storedUser);
      if (!user) throw new Error("Datos de usuario inválidos");
  
      set({
        user,
        token,
        isAuthenticated: true,
        error: null,
        loading: false,
      });
    } catch (error) {
      console.error("Error al inicializar auth:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ 
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false 
      });
    }
  },

  login: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await loginService(data);
      const token = response.token;

      // Decodificar para verificar
      const decoded = jwtDecode<{
        id: number;
        email: string;
        username: string;
        role: { id: number; name: string };
        exp: number;
      }>(token);

      // Verificar expiración
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        throw new Error("Token expirado");
      }

      // Guardar en localStorage (encriptar solo si no es producción)
      const shouldEncrypt = import.meta.env.NODE_ENV !== "production";
      localStorage.setItem("token", shouldEncrypt ? encryptData(token) : token);
      localStorage.setItem("user", encryptData(decoded));

      set({
        user: decoded,
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
