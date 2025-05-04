// src/services/auth/authservices.ts

import { Api } from "@/config/axios_base.config";
import { AuthResponse, LoginData, RegisterData } from "@/interface/user/user.interface";

export const loginService = async (data: LoginData) => {
  const response = await Api.post<AuthResponse>("/auth/login", data);
  return response.data;
};

export const registerService = async (data: RegisterData) => {
  const response = await Api.post<AuthResponse>("/auth/register", data);
  return response.data;
};