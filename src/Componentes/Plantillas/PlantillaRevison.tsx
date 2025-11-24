import { LabelNombre } from "../Atomos/label";
import { GETRevisiones } from "../../Servicios/ServicioRevisiones";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
import { FormularioRevision } from "../Organismos/FormPostRevision";
export function PlantillaRevisiones() {
  const { datos } = GETRevisiones();
  return (
    <>
      <div>
        <LabelNombre nombre="Animales En tratamiento"></LabelNombre>
      </div>
      <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
      <FormularioRevision></FormularioRevision>
    </>
  );
}
