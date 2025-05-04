import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";




function ListaDeportista() {
 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Listado de Deportistas</h1>
      
      <div className="mb-6 flex justify-between items-center">
        {/* Input para filtrar */}
        <Input
          type="text"
          placeholder="Buscar por posicion, nombre, apellido, documento o email"
         
          className="w-1/2"
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          Exportar a Excel
        </Button>
      </div>

<table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr>
            nueva lista
          </tr>
        </thead>
        <tbody>

          
        </tbody>
      </table>
      
      
    </div>
  );
}

export default ListaDeportista;
