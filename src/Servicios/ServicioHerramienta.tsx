import { useEffect, useState } from "react";
import type { Herramienta } from "../Types/Herramineta";
export function GetHerramientas() {
  const [datos2, setdatos] = useState<Herramienta[]>([]);
  useEffect(() => {
    const URL =
      "https://veterinaria-production-5cbc.up.railway.app/api/Herramientas/GetHerramientas";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos2) => setdatos(datos2));
  }, []);
  return { datos2 };
}
