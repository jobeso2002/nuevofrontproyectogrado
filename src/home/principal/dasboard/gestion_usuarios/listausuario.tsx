
import { Link } from "react-router-dom";

function ListaUsuarios() {
  

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Usuarios</h1>

      <Link to="/registrar" className="text-blue-500 underline mb-4 inline-block">
        Crear Nuevo Usuario
      </Link>

      {/* Input para filtrar */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
    
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr>
            {["ID", "Nombre", "Correo", "ID Rol", "Acciones"].map((header) => (
              <th key={header} className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

          {/* {filteredUsers.map((user: Persona) => (
            <tr key={user.id} className="hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">{user.primer_nombre}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">{user.id_rol}</td>
              <td className="px-4 py-2 border-b flex gap-2">
                <button
             
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                >
                  ✏️
                </button>
                <button
                
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
