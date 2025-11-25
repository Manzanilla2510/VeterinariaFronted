import { useState } from "react";

interface Vacass {
  vacaID: number;
  codigoVaca: string;
  raza: string;
  estadoSalud: string;
  [key: string]: any;
}

const ESTADOS_SALUD = [
  "Saludable",
  "Enferma",
  "En Terapia",
  "Peñada",
  "En Producción",
  "Retirada",
  "Muerta",
];

export function FormPutAnimal() {
  const [busqueda, setBusqueda] = useState("");
  const [vaca, setVaca] = useState<Vacass | null>(null);
  const [nuevoEstado, setNuevoEstado] = useState("");
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const buscarVaca = async () => {
    if (!busqueda.trim()) {
      setMensaje("Por favor ingrese un término de búsqueda");
      return;
    }

    setCargando(true);
    try {
      const respuesta = await fetch(
        "https://proyecto1-production-daf8.up.railway.app/api/vacas"
      );

      if (!respuesta.ok) {
        throw new Error("Error al buscar vacas");
      }

      const vacas = await respuesta.json();

      const vacaEncontrada = vacas.find(
        (v: Vacass) =>
          v.vacaID.toString() === busqueda.trim() ||
          v.codigoVaca.toLowerCase() === busqueda.trim().toLowerCase() ||
          v.raza.toLowerCase().includes(busqueda.trim().toLowerCase()) ||
          v.estadoSalud.toLowerCase().includes(busqueda.trim().toLowerCase())
      );

      if (!vacaEncontrada) {
        throw new Error("No se encontró ninguna vaca");
      }

      setVaca(vacaEncontrada);
      setNuevoEstado(vacaEncontrada.estadoSalud);
      setMensaje("");
    } catch (error: any) {
      setMensaje(error.message || "Error al buscar la vaca");
      setVaca(null);
    } finally {
      setCargando(false);
    }
  };

  const actualizarEstado = async () => {
    if (!vaca) {
      setMensaje("Primero busque una vaca");
      return;
    }

    if (!nuevoEstado.trim()) {
      setMensaje("Por favor seleccione un estado");
      return;
    }

    setCargando(true);

    try {
      const vacaActualizada = {
        ...vaca,
        estadoSalud: nuevoEstado,
      };

      const respuesta = await fetch(
        `https://proyecto1-production-daf8.up.railway.app/api/vacas/${vaca.vacaID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vacaActualizada),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al actualizar el estado");
      }

      const datosActualizados = await respuesta.json();
      setVaca(datosActualizados);
      setMensaje("¡Estado actualizado correctamente!");
    } catch (error: any) {
      setMensaje(error.message || "Error al actualizar el estado");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h3>Actualizar Estado de la Vaca</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Buscar por código, raza o estado"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarVaca()}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            flex: 1,
          }}
        />

        <button
          onClick={buscarVaca}
          disabled={cargando}
          style={{
            padding: "8px 16px",
            backgroundColor: cargando ? "#ccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: cargando ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {cargando ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {vaca && (
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              padding: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              minWidth: "200px",
            }}
          >
            <strong>Estado actual:</strong> {vaca.estadoSalud}
          </div>

          <select
            value={nuevoEstado}
            onChange={(e) => setNuevoEstado(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              minWidth: "200px",
            }}
          >
            <option value="">Seleccione nuevo estado</option>
            {ESTADOS_SALUD.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>

          <button
            onClick={actualizarEstado}
            disabled={cargando || !nuevoEstado}
            style={{
              padding: "8px 16px",
              backgroundColor: cargando || !nuevoEstado ? "#ccc" : "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: cargando || !nuevoEstado ? "not-allowed" : "pointer",
            }}
          >
            {cargando ? "Actualizando..." : "Actualizar"}
          </button>
        </div>
      )}

      {mensaje && (
        <div
          style={{
            padding: "10px",
            backgroundColor:
              mensaje.includes("Error") || mensaje.includes("No se encontró")
                ? "#ffebee"
                : "#e8f5e9",
            color:
              mensaje.includes("Error") || mensaje.includes("No se encontró")
                ? "#c62828"
                : "#2e7d32",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {mensaje}
        </div>
      )}
    </div>
  );
}
