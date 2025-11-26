import { useEffect, useState } from "react";
import type { Medicamento } from "../Types/Medicamento";
export function GetMedicamentos() {
  const [datos, setdatos] = useState<Medicamento[]>([]);
  useEffect(() => {
    const URL =
      "https://veterinaria-production-44a5.up.railway.app/api/Medicamentoes/GetMedicamentos";
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdatos(datos));
  }, []);
  return { datos };
}
