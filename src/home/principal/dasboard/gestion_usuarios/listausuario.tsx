import { useUserStore } from "@/store/usuario/user";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaUsuarios() {
  const { persona, consultarUsuario } = useUserStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        await consultarUsuario();
      } catch (err) {
        setError(
          "No se pudieron cargar los usuarios. Verifica tu conexión o permisos."
        );
        console.error("Error al cargar usuarios:", err);
      }
    };
    loadUsers();
  }, [consultarUsuario]);

  // Filtrar usuarios basado en el término de búsqueda
  const filteredUsers = persona.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}
      
      <h1 className="text-2xl font-bold mb-4">Listado de Usuarios</h1>

      <div className="flex justify-between items-center mb-4">
        <Link
          to="/registrar"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Crear Nuevo Usuario
        </Link>

        {/* Input para filtrar */}
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-64"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No se encontraron usuarios
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                {["ID", "Nombre", "Correo", "Rol", "Acciones"].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.username}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role?.name || "Sin rol"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex gap-2">
                      <Link
                        to={`/dashboard/editar-usuario/${user.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Editar✏️
                      </Link>
                      <button
                        onClick={() => {
                          // Aquí implementarías la lógica para eliminar
                          if (
                            window.confirm(
                              `¿Estás seguro de eliminar a ${user.username}?`
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

export default ListaUsuarios;
