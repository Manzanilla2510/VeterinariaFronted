import { useEffect, useState } from "react";
import type { PostSolicitud } from "../Types/Solicitud";

export function GetSolicitud() {
  const [datos, setdatos] = useState([]);
  useEffect(() => {
    const URL =
      "https://sucursallapazbackend-production.up.railway.app/api/Solicitudes";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}

//Falta el post
export function PostSolicitudrevision(solicitud: PostSolicitud) {
  const URL =
    "https://sucursallapazbackend-production.up.railway.app/api/Solicitudes";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(solicitud),
  })
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error("Ocurrió un error");
      return respuesta.json();
    })
    .then((data) => console.log("Creado exitosamente", data))
    .catch((err) => console.error(err));
}
