import { LabelNombre } from "../Atomos/label";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
import { GetMedicamentos } from "../../Servicios/ServicioMedicamento";
import { GetHerramientas } from "../../Servicios/ServicioHerramienta";
export function PlantillaInventario() {
  const { datos } = GetMedicamentos();
  const { datos2 } = GetHerramientas();
  return (
    <>
      <div>
        <div>
          <LabelNombre nombre="Medicamentos En disposicion"></LabelNombre>
        </div>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
        <div>
          <LabelNombre nombre="Herramientas En disposicion"></LabelNombre>
        </div>
        <TablaDeDatosGenerica lista={datos2}></TablaDeDatosGenerica>
      </div>
    </>
  );
}
