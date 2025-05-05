import { AuthResponse, RegisterData,  } from "@/interface/user/user.interface";
import { Api } from "../../config/axios_base.config";



export const registrarusuario = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await Api.post("/usuario", data);
  return response.data;
};

export const ConsultarUsuario = () => {
  return Api.get("/usuario");
};

// export const registerService = async (data: RegisterData) => {
//   const response = await Api.post<AuthResponse>("/auth/register", data);
//   return response.data;
// };

// export const ConsultarUsuarioId = (id: number) => {
//   return Api.get(`/usuario/buscar/${id}`);
// };

// export const EliminarUsuario = (id: number) => {
//   return Api.delete(`/usuario/${id}`);
// };

// export const ActualizarUsuario = (id: number, data: Partial<Register>) => {
//   return Api.patch(`/usuario/${id}`, data);
// };

