import { GetAnimales } from "../../Servicios/ServicioAnimal";
import { LabelNombre } from "../Atomos/label";

import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";
import { FormPutAnimal } from "../Organismos/FormPutAnimal";

export function PlantillaAnimales() {
  const { datos } = GetAnimales();
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
          <LabelNombre nombre="Listado de Animales"></LabelNombre>
        </div>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
        <FormPutAnimal></FormPutAnimal>
      </div>
    </>
  );
}
