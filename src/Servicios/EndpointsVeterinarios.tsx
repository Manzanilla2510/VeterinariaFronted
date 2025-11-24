import { useEffect, useState } from "react";
import type { Veterinario, VeterinarioPost } from "../Types/Veterinario";

export function GetVeterinarios() {
  const [datos, setdatos] = useState<Veterinario[]>([]);
  useEffect(() => {
    const URL =
      "https://veterinaria-production-5cbc.up.railway.app/api/Veterinarios/GetVeterinario";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}

export function VeterinarioServicioPost(veterinario: VeterinarioPost) {
  const URL =
    "https://veterinaria-production-5cbc.up.railway.app/api/Veterinarios/PostVeterinario";
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(veterinario),
  })
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error("ocurrio un error");
      return respuesta.json();
    })
    .then((data) => console.log("Creado Exitosamente", data))
    .catch((err) => console.error(err));
}

export function DeleteVeterinario(ci: string) {
  const URL =
    "https://veterinaria-production-5cbc.up.railway.app/api/Veterinarios/DeleteVeterinario";

  fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ci }),
  })
    .then((respuesta) => {
      if (!respuesta.ok)
        throw new Error("Error al deshabilitar al veterinario");
      return respuesta.json();
    })
    .then((data) => console.log("Veterinario deshabilitado", data))
    .catch((err) => console.error(err));
}
