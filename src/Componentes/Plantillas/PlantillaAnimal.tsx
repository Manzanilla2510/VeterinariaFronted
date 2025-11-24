import { GetAnimales } from "../../Servicios/ServicioAnimal";
import { LabelNombre } from "../Atomos/label";

import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
import { FormPutAnimal } from "../Organismos/xd";

export function PlantillaAnimales() {
  const { datos } = GetAnimales();
  return (
    <>
      <div>
        <LabelNombre nombre="Animales En tratamiento"></LabelNombre>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
        <FormPutAnimal></FormPutAnimal>
      </div>
    </>
  );
}
