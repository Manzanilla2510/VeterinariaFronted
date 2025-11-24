import { useState } from "react";
import { PutAnimal } from "../../Servicios/ServicioAnimal";

export function FormPutAnimal() {
  const [codigo, setCodigo] = useState("");
  const [estado, setEstado] = useState("");

  const handlePut = () => {
    PutAnimal({
      codigoAnimal: codigo,
      estado: estado,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Código del animal"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nuevo estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      />

      <button onClick={handlePut}>Actualizar estado</button>
    </div>
  );
}
