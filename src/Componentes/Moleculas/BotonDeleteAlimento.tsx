import { useState } from "react";
import { DeleteAlimentacion } from "../../Servicios/ServicioAlimentacion";

export function FormDeleteAlimentacion() {
  const [ci, setCi] = useState("");

  const handleDelete = () => {
    DeleteAlimentacion(ci);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Codigo Del Alimento"
        value={ci}
        onChange={(e) => setCi(e.target.value)}
      />

      <button onClick={handleDelete}>Deshabilitar</button>
    </div>
  );
}
