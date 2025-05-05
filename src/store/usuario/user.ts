import { AuthResponse, RegisterData, User } from "@/interface/user/user.interface";
import {
  ConsultarUsuario,
  registrarusuario,
} from "@/services/user/usuario.service";
import { create } from "zustand";



interface UserProp {
  persona: User[];
  personaConsulta: User | null;
  consultarUsuario: () => Promise<void>;
  crear_persona: (data: RegisterData) => Promise<AuthResponse>;
}


export const useUserStore = create<UserProp>((set) => ({  
  persona: [],
  personaConsulta: null,

  consultarUsuario: async () => {
    try {
      const response = await ConsultarUsuario();
      const personas_consultar: User[] = response.data;
      set({persona: personas_consultar}); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar personas:", error);
    }
  },

  

  crear_persona: async (data: RegisterData) => {
    try {
      const response = await registrarusuario(data);
      console.log("Respuesta del servidor usuario registrado:", response);
      
      // Si el backend devuelve un token después del registro
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      
      return response;
    } catch (error) {
      console.error("Error al crear usuario:", error);
      throw error; // Re-lanzar el error para manejarlo en el componente
    }
  },


}));

