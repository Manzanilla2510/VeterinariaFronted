import { useEffect, useState } from "react";
import type { Alimentacion } from "../Types/Alimentacion";
export function GetAlimentacion() {
  const [datos, setdatos] = useState<Alimentacion[]>([]);
  useEffect(() => {
    const URL =
      "https://veterinaria-production-5cbc.up.railway.app/api/Alimentacions/GetAlimentacion";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}

export function PostAlimentacion(alimentacion: Alimentacion) {
  const URL =
    "https://veterinaria-production-5cbc.up.railway.app/api/Alimentacions/PostAlimentacion";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alimentacion),
  })
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error("Ocurrió un error");
      return respuesta.json();
    })
    .then((data) => console.log("Creado exitosamente", data))
    .catch((err) => console.error(err));
}

//delete
export function DeleteAlimentacion(codigoAnimal: string) {
  const URL =
    "https://veterinaria-production-5cbc.up.railway.app/api/Alimentacions/DeleteAlimentacion";

  fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ codigoAnimal }),
  })
    .then((respuesta) => {
      if (!respuesta.ok)
        throw new Error("Error al deshabilitar al veterinario");
      return respuesta.json();
    })
    .then((data) => console.log("Veterinario deshabilitado", data))
    .catch((err) => console.error(err));
}
