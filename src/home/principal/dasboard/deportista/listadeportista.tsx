import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ListaDeportista() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Listado de Deportistas</h1>

      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Input
          type="text"
          placeholder="Buscar por nombre o email"
          className="w-full md:w-1/2"
        />
        <Button className="bg-blue-600 hover:bg-blue-700 self-end md:self-auto">
          Exportar a Excel
        </Button>
      </div>

      {/* Tabla scrollable */}
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
          <tbody>
            {/* Datos */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaDeportista;
