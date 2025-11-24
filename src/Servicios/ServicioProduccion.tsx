import { useEffect, useState } from "react";
import type { Produccion } from "../Types/Produccion";
export function GetProduccion() {
  const [datos, setdatos] = useState<Produccion[]>([]);
  useEffect(() => {
    const URL =
      "https://localhost:7248/api/ProduccionLeches/Getparasacaruninformedelacantidaddelecheproducidadelasvacas";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}
