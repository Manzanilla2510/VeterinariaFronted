export interface Animal {
  CodigoAnimal: string;
  Peso: string;
  Edad: string;
  Raza: string;
  FechaIngreso: Date;
  Estado: string;
}
export interface PutAnimal {
  codigoAnimal: string;
  estado: string;
}
