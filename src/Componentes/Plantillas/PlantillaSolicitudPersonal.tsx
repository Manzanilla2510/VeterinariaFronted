import { GetSolicitud } from "../../Servicios/ServicioSolicitud";
import { LabelNombre } from "../Atomos/label";
import { FormularioSolicitud } from "../Organismos/FormPostSolicitud";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";

export function PlantillaSolicitudPersonal() {
  const { datos } = GetSolicitud();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            padding: "40px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <LabelNombre nombre="Listado De Solicitud Para Requerimientos Del Veterinario"></LabelNombre>
        </div>
        <div>
          <FormularioSolicitud></FormularioSolicitud>
        </div>
      </div>
    </>
  );
}
