import { LabelNombre } from "../Atomos/label";
import { GetProduccion } from "../../Servicios/ServicioProduccion";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
export function PlantillaProducciones() {
  const { datos } = GetProduccion();
  return (
    <>
      <div>
        <LabelNombre nombre="Animales En tratamiento"></LabelNombre>
      </div>
      <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
    </>
  );
}
