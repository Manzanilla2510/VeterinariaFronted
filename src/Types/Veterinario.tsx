export interface Veterinario {
  ci: number;
  nombre: string;
  apellido: string;
  telefono: string;
  especialidad: string;
  correo: string;
  sueldo: number;
}
export interface VeterinarioPost {
  Nombre: string;
  Apellido: string;
  Telefono: string;
  Ci: string;
  Especialidad: string;
  Correo: string;
  Sueldo: Number;
}
export interface VeterinarioPut {
  Ci: string;
}
