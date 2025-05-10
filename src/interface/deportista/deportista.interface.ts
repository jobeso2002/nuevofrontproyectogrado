export interface Deportista {
    id: number;
    documentoIdentidad: string;

    tipoDocumento: string;

    primer_nombre: string;

    segundo_nombre: string;

    primer_apellido: string;

    segundo_apellido: string;

    fechaNacimiento: string;

    genero: string;

    foto: string;

    telefono: string;

    email: string;

    direccion: string;
}

export type CreateDeportista = Omit<Deportista, "id">;

// export interface Deportista {
//     id: number;
//     posicion: string;
//     estado: string;
//     numero_camisa: number;
//     estatura: number;
//     peso: number;
//     id_club: number;
//     id_persona: number;
// }
