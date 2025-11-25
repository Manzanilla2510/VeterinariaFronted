import { LabelNombre } from "../Atomos/label";
import { GETRevisiones } from "../../Servicios/ServicioRevisiones";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
import { FormularioRevision } from "../Organismos/FormPostRevision";
export function PlantillaRevisiones() {
  const { datos } = GETRevisiones();
  return (
    <>
      <div
        style={{
          padding: "10px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <LabelNombre nombre="Animales En tratamiento"></LabelNombre>
      </div>
      <div>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
      </div>
      <div>
        <div
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LabelNombre nombre="Agregue un Animal"></LabelNombre>
        </div>
      </div>
      <div>
        <FormularioRevision></FormularioRevision>
      </div>
    </>
  );
}
