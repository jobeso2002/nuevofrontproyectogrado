// src/home/principal/registrar/registrar.tsx

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigate } from "react-router-dom";
import liga from "@/assets/liga.jpg";
import { useAuthStore } from "@/store/authstore";
import { useForm } from "@/components/hooks/useform";
import { RolesStore } from "@/store/role/role";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Registro() {
  const { register, isAuthenticated, loading, error } = useAuthStore();
  const { form, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
    id_rol: 0,
  });

  const { ConsultRole, roles } = RolesStore();
  
  useEffect(() => {
    if (roles.length === 0) {
      ConsultRole();
    }
  }, [ConsultRole, roles.length]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(form);
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex justify-center bg-green-300 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={liga} alt="Logo" className="w-16 h-16 object-contain mb-4" />
          <h1 className="text-3xl font-bold text-green-800">REGISTRAR</h1>
        </div>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Nombre de usuario
            </Label>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              required
              minLength={3}
              className="border p-2 rounded w-full"
              placeholder="Nombre de usuario"
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </Label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              required
              minLength={6}
              className="border p-2 rounded w-full"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <Label htmlFor="id_rol" className="block text-sm font-medium text-gray-700">
              Rol
            </Label>
            <select
              name="id_rol"
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            >
              <option value="">Seleccione un Rol</option>
              {roles.map((rol) => (
                <option key={rol.id} value={rol.id}>
                  {rol.name}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrar"}
          </Button>
        </form>
        
        <p className="text-center text-sm text-gray-700 mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;