import { Api } from "@/config/axios_base.config";
import { CreateDeportista } from "@/interface/deportista/deportista.interface";


// deportista.service.ts
export const CreateDeportistas = async (data: CreateDeportista) => {
  try {
    const response = await Api.post("/deportista", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear deportista:", error);
    throw error; // Re-lanzar el error para manejo en el store
  }
};
  
export const ConsultarDeportistas = () => {
  return Api.get("/deportista");
};






