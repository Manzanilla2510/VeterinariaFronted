import { GetVeterinarios } from "../../Servicios/EndpointsVeterinarios";
import { LabelNombre } from "../Atomos/label";
import { FormDeleteVeterinario } from "../Moleculas/BotonDeleteVeterinario";
import { FormularioVeterinario } from "../Organismos/FormularioVeterinario";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";

export function PlantillaVeterinarios() {
  const { datos } = GetVeterinarios();

  return (
    <div className="container mt-4">
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <LabelNombre nombre="Veterinarios Activos" />
      </div>

      <TablaDeDatosGenerica lista={datos} />

      <div
        style={{ display: "flex", justifyContent: "left", padding: "50px 0" }}
      >
        <LabelNombre nombre="Rellenar los campos para agregar un nuevo veterinario" />
      </div>

      <FormularioVeterinario />

      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <LabelNombre nombre="Borrar un Veterinario" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
          padding: "15px",
        }}
      >
        <FormDeleteVeterinario />
      </div>
    </div>
  );
}
