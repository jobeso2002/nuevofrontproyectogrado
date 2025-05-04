import { Button } from "@/components/ui/button";



function ContactoFamiliarDep() {
    
    

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Datos De Contactos</h1>
            <form className="grid grid-cols-4 gap-6">
                {/* Selección de deportista */}
                <div className="col-span-4">
                    <label htmlFor="deportistaId" className="block mb-2 font-semibold">
                        Seleccionar Deportista:
                    </label>
                    <select
                        id="deportistaId"
                        name="deportistaId"
                        
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    >
                        <option value="">Seleccione un deportista</option>
                        <option value="1">Deportista 1</option>
                        <option value="2">Deportista 2</option>
                    </select>
                </div>

                {/* Campos autocompletados (solo lectura) */}
                <div>
                    <label className="block mb-2 font-semibold">id deportista:</label>
                    <input
                        type="text"
                       
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Posicion:</label>
                    <input
                        type="text"
                     
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">estado:</label>
                    <input
                        type="text"
                       
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">estatura:</label>
                    <input
                        type="text"
                        
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">peso:</label>
                    <input
                        type="text"
                        
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="block mb-2 font-semibold">numero de camisa:</label>
                    <input
                        type="text"
                        
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                {/* Campos editables para el contacto */}
                <div>
                    <label htmlFor="parentesco" className="block mb-2 font-semibold">
                        Parentesco:
                    </label>
                    <select
                        id="parentesco"
                        name="parentesco"
                        
                        className="border border-teal-600 p-2 rounded w-full"
                        required
                    >
                        <option value="">Seleccione Parentesco</option>
                        <option value="padre">Padre</option>
                        <option value="madre">Madre</option>
                        <option value="abuela">Abuela</option>
                        <option value="abuelo">Abuelo</option>
                        <option value="tio">Tío</option>
                        <option value="primo">Primo</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="direccion_residencia" className="block mb-2 font-semibold">
                        Dirección:
                    </label>
                    <input
                        type="text"
                        id="direccion_residencia"
                        name="direccion_residencia"
                        
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="barrio" className="block mb-2 font-semibold">
                        Barrio:
                    </label>
                    <input
                        type="text"
                        id="barrio"
                        name="barrio"
                      
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                </div>

           

                <div className="col-span-4 flex justify-center">
                    <Button 
                        type="submit" 
                        className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Guardar Contacto
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactoFamiliarDep;