import { useState } from "react";
import { DeleteAlimentacion } from "../../Servicios/ServicioAlimentacion";

export function FormDeleteAlimentacion() {
  const [ci, setCi] = useState("");

  const handleDelete = () => {
    DeleteAlimentacion(ci);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Codigo Del Alimento"
        value={ci}
        onChange={(e) => setCi(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "220px",
        }}
      />

      <button
        onClick={handleDelete}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#d9534f",
          color: "white",
          cursor: "pointer",
        }}
      >
        Deshabilitar Alimento
      </button>
    </div>
  );
}
