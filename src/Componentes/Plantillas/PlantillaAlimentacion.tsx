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
        <LabelNombre nombre="Tabla de alimentos"></LabelNombre>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
        <FormDeleteAlimentacion></FormDeleteAlimentacion>
        <FormularioAlimentacion></FormularioAlimentacion>
      </div>
    </>
  );
}
