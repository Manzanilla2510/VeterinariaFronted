import { useEffect, useState } from "react";
import type { Revision } from "../Types/Revision";
export function GETRevisiones() {
  const [datos, setdatos] = useState<Revision[]>([]);
  useEffect(() => {
    const URL =
      "https://veterinaria-production-5cbc.up.railway.app/api/Revisions/GetRevisiones";
    // "https://localhost:7248/api/Revisions/GETparasacaruninformesobrelasrevisionesqueseleshacealasvacas";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}

//Falta el post
export function PostRevision(revision: Revision) {
  const URL =
    "https://veterinaria-production-5cbc.up.railway.app/api/Revisions/PostRevision";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(revision),
  })
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error("Ocurrió un error");
      return respuesta.json();
    })
    .then((data) => console.log("Creado exitosamente", data))
    .catch((err) => console.error(err));
}
