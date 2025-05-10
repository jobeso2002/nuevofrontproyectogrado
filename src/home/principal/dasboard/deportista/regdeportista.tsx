import { useForm } from "@/components/hooks/useform";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDeportistaStore } from "@/store/deportista/deportista";

function RegDeportista() {
  const { crear_deportista } = useDeportistaStore();
  const { form, handleChange } = useForm({
    documentoIdentidad: "",
    tipoDocumento: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    fechaNacimiento: "",
    genero: "",
    foto: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (
      !form.documentoIdentidad ||
      !form.tipoDocumento ||
      !form.primer_nombre ||
      !form.primer_apellido ||
      !form.fechaNacimiento ||
      !form.genero
    ) {
      alert("Por favor complete todos los campos obligatorios");
      return;
    }

    // Mapear valores al formato que espera el backend
    const deportistaData = {
      documentoIdentidad: form.documentoIdentidad,
      tipoDocumento: form.tipoDocumento.toLowerCase().includes("cedula")
        ? "cedula"
        : form.tipoDocumento.toLowerCase().includes("tarjeta")
        ? "tarjeta_identidad"
        : "pasaporte",
      primer_nombre: form.primer_nombre,
      segundo_nombre: form.segundo_nombre, // Permitir nulo si es opcional
      primer_apellido: form.primer_apellido,
      segundo_apellido: form.segundo_apellido,
      fechaNacimiento: form.fechaNacimiento, // Enviar como string (YYYY-MM-DD)
      genero: form.genero.toLowerCase(), // Asegurar minúsculas
      foto: form.foto || "default.jpg", // Valor por defecto si no se proporciona
      telefono: form.telefono,
      email: form.email,
      direccion: form.direccion,
    };

    try {
      console.log("Datos a enviar:", deportistaData);
      await crear_deportista(deportistaData);
      console.log("Registro exitoso");
    } catch (error) {
      console.error("Error en el registro:", error);
      alert(
        "Error al registrar deportista. Verifique la consola para más detalles."
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registrar Deportista</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-6">
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
          <Label htmlFor="tipoDocumento" className="block mb-2 font-semibold">
            Tipo de Documento:
          </Label>
          <select
            id="tipoDocumento"
            name="tipoDocumento"
            className="border p-2 rounded"
            onChange={handleChange}
          >
            <option value="">Tipo de Documento</option>
            <option value="Tarjeta Identidad">Tarjeta Identidad</option>
            <option value="Cedula Ciudadania">Cedula Ciudadania</option>
            <option value="Cedula Extranjera">Cedula Extranjera</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="documentoIdentidad"
            className="block mb-2 font-semibold"
          >
            Número Documento:
          </label>
          <input
            id="documentoIdentidad"
            type="text"
            name="documentoIdentidad"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="fechaNacimiento" className="text-black text-sm">
            Fecha Nacimiento:
          </Label>
          <Input
            id="fechaNacimiento"
            type="date"
            name="fechaNacimiento"
            className="border p-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="primer_nombre" className="block mb-2 font-semibold">
            Primer Nombre:
          </label>
          <input
            id="primer_nombre"
            type="text"
            name="primer_nombre"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="segundo_nombre" className="block mb-2 font-semibold">
            Segundo Nombre:
          </label>
          <input
            id="segundo_nombre"
            type="text"
            name="segundo_nombre"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="primer_apellido" className="block mb-2 font-semibold">
            Primer Apellido:
          </label>
          <input
            id="primer_apellido"
            type="text"
            name="primer_apellido"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="segundo_apellido"
            className="block mb-2 font-semibold"
          >
            Segundo Apellido:
          </label>
          <input
            id="segundo_apellido"
            type="text"
            name="segundo_apellido"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="foto" className="block mb-2 font-semibold">
            foto:
          </label>
          <input
            id="foto"
            type="text"
            name="foto"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block mb-2 font-semibold">
            Telefono:
          </label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block mb-2 font-semibold">
            direccion:
          </label>
          <input
            id="direccion"
            type="text"
            name="direccion"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <Label htmlFor="genero" className="block mb-2 font-semibold">
            Genero:
          </Label>
          <select
            id="genero"
            name="genero"
            className="border p-2 rounded"
            onChange={handleChange}
          >
            <option value="">Seleccione genero</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Correo Electrónico:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
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
