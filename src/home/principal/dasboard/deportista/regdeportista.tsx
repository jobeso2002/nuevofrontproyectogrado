
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


function RegDeportista() {
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registrar Deportista</h1>
      <form className="grid grid-cols-4 gap-6">
        {/* <div className="col-span-1 flex flex-col items-center">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Foto del Deportista"
              className="w-32 h-32 object-cover border border-gray-300"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center border border-gray-300 bg-gray-100">
              <UploadCloud className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            className="hidden"
          />
          <Button
            type="button"
            onClick={() => document.getElementById("fileInput")?.click()}
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            Subir Foto
          </Button>
        </div> */}

        <div>
          <Label htmlFor="tipo_documento" className="block mb-2 font-semibold">
            Tipo de Documento:
          </Label>
          <select
            id="tipo_documento"
            name="tipo_documento"
            
            className="border p-2 rounded"
          >
            <option value="">Tipo de Documento</option>
            <option value="Tarjeta Identidad">Tarjeta Identidad</option>
            <option value="Cedula Ciudadania">Cedula Ciudadania</option>
            <option value="Cedula Extranjera">Cedula Extranjera</option>
          </select>
        </div>

        <div>
          <label htmlFor="id_persona" className="block mb-2 font-semibold">
            Número Documento:
          </label>
          <input
            type="text"
            id="id_persona"
            name="id_persona"
        
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="lugar_exp_doc" className="block mb-2 font-semibold">
            Lugar Expedición:
          </label>
          <input
            type="text"
            id="lugar_exp_doc"
            name="lugar_exp_doc"
          
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="fecha_exp_doc" className="text-black text-sm">
            Fecha de Expedición
          </Label>
          <Input
            type="date"
            name="fecha_exp_doc"
           
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="fecha_nacimiento" className="text-black text-sm">
            Fecha Nacimiento:
          </Label>
          <Input
            type="date"
            name="fecha_nacimiento"
            
            className="border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="primer_nombre" className="block mb-2 font-semibold">
            Primer Nombre:
          </label>
          <input
            type="text"
            id="primer_nombre"
            name="primer_nombre"
           
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="segundo_nombre" className="block mb-2 font-semibold">
            Segundo Nombre:
          </label>
          <input
            type="text"
            id="segundo_nombre"
            name="segundo_nombre"
           
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="primer_apellido" className="block mb-2 font-semibold">
            Primer Apellido:
          </label>
          <input
            type="text"
            id="primer_apellido"
            name="primer_apellido"
           
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="segundo_apellido" className="block mb-2 font-semibold">
            Segundo Apellido:
          </label>
          <input
            type="text"
            id="segundo_apellido"
            name="segundo_apellido"
           
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <Label htmlFor="tipo_sangre" className="block mb-2 font-semibold">
            Tipo de Sangre:
          </Label>
          <select
            id="tipo_sangre"
            name="tipo_sangre"
         
            className="border p-2 rounded"
          >
            <option value="">Seleccione Tipo de Sangre</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div>
          <Label htmlFor="sexo" className="block mb-2 font-semibold">
            Genero:
          </Label>
          <select
            id="sexo"
            name="sexo"
         
            className="border p-2 rounded"
          >
            <option value="">Seleccione Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
         
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        {/* Datos de deportista */}
        <div>
          <label htmlFor="estatura" className="block mb-2 font-semibold">
            Estatura (cm):
          </label>
          <input
            type="text"
            id="estatura"
            name="estatura"
          
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="peso" className="block mb-2 font-semibold">
            Peso (kg):
          </label>
          <input
            type="text"
            id="peso"
            name="peso"
         
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="estado" className="block mb-2 font-semibold">
            Estado:
          </label>
          <select
            name="estado"
       
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">Estado Afiliacion</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <div>
          <label htmlFor="numero_camisa" className="block mb-2 font-semibold">
            Número Camisa:
          </label>
          <input
            type="text"
            id="numero_camisa"
            name="numero_camisa"
           
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="posicion" className="block mb-2 font-semibold">
            Posición:
          </label>
          <input
            type="text"
            id="posicion"
            name="posicion"
           
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="club" className="block mb-2 font-semibold">
            Club:
          </label>
          <select
            name="id_club"
          
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">Seleccione Club</option>
          
          </select>
        </div>

       

        <div className="col-span-4 flex justify-center">
          <Button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegDeportista;