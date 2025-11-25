import { GetAlimentacion } from "../../Servicios/ServicioAlimentacion";
import { LabelNombre } from "../Atomos/label";
import { FormDeleteAlimentacion } from "../Moleculas/BotonDeleteAlimento";
import { FormularioAlimentacion } from "../Organismos/FormPostAlimentacion";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
export function PlantillaAlimentacion() {
  const { datos } = GetAlimentacion();
  return (
    <>
      <div>
        <div
          style={{
            padding: "25px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <LabelNombre nombre="Tabla de alimentos"></LabelNombre>
        </div>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
        <div
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LabelNombre nombre="Ingrese Un Nuevo Registro"></LabelNombre>
        </div>
        <FormularioAlimentacion></FormularioAlimentacion>
        <div
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LabelNombre nombre="Elimine un Alimento"></LabelNombre>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
            padding: "15px",
          }}
        >
          {" "}
          <FormDeleteAlimentacion></FormDeleteAlimentacion>
        </div>
      </div>
    </>
  );
}
