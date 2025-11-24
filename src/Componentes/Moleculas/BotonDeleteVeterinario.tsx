import { useState } from "react";
import { DeleteVeterinario } from "../../Servicios/EndpointsVeterinarios";

export function FormDeleteVeterinario() {
  const [ci, setCi] = useState("");

  const handleDelete = () => {
    DeleteVeterinario(ci);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="CI del veterinario"
        value={ci}
        onChange={(e) => setCi(e.target.value)}
      />

      <button onClick={handleDelete}>Deshabilitar</button>
    </div>
  );
}
