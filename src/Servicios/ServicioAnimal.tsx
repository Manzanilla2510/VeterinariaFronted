import { useEffect, useState } from "react";
import type { Animal, PutAnimal } from "../Types/Animal";
export function GetAnimales() {
  const [datos, setdatos] = useState<Animal[]>([]);
  useEffect(() => {
    const URL = "https://proyecto1-production-daf8.up.railway.app/api/vacas";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}

export function PutAnimal(data: PutAnimal) {
  const URL = "https://localhost:7248/api/Animals/PutAnimal";

  fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((respuesta) => {
      if (!respuesta.ok)
        throw new Error("Error al actualizar el estado del animal");
      return respuesta.json();
    })
    .then((data) => console.log("Animal actualizado", data))
    .catch((err) => console.error(err));
}
