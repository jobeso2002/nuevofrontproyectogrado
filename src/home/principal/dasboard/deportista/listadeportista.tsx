import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeportistaStore } from "@/store/deportista/deportista";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaDeportista() {
  const { deportistas, ConsultarDeportista } = useDeportistaStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        await ConsultarDeportista();
      } catch (err) {
        setError(
          "No se pudieron cargar los usuarios. Verifica tu conexión o permisos."
        );
        console.error("Error al cargar usuarios:", err);
      }
    };
    loadUsers();
  }, [ConsultarDeportista]);

  // Filtrar usuarios basado en el término de búsqueda
  const filteredUsers = deportistas.filter(
    (deportista) =>
      deportista.primer_apellido
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      deportista.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
      )}

      <h1 className="text-2xl font-bold mb-6">Listado de Deportistas</h1>

      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Buscar por apellido o email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-64"
        />
        <Button className="bg-blue-600 hover:bg-blue-700 self-end md:self-auto">
          Exportar a Excel
        </Button>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No se encontraron usuarios
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-max bg-white border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "ID",
                  "Tipo_Documento",
                  "N_Identificacion",
                  "Primer_Nombre",
                  "Segundo_Nombre",
                  "Primer_Apellido",
                  "Segundo_Apellido",
                  "Fecha_Nacimiento",
                  "Genero",
                  "Telefono",
                  "Direccion",
                  "Email",
                  "Acciones"
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((deportista) => (
                <tr
                  key={deportista.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {deportista.tipoDocumento}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.documentoIdentidad}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.primer_nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.segundo_nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.primer_apellido}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.segundo_apellido}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.fechaNacimiento}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.genero}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.telefono}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.direccion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {deportista.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex gap-2">
                      <Link
                        to={`/dashboard/editar-usuario/${deportista.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Editar✏️
                      </Link>
                      <button
                        onClick={() => {
                          // Aquí implementarías la lógica para eliminar
                          if (
                            window.confirm(
                              `¿Estás seguro de eliminar a ${deportista.primer_nombre}?`
                            )
                          ) {
                            // eliminarUsuario(user.id);
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        Eliminar🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListaDeportista;
