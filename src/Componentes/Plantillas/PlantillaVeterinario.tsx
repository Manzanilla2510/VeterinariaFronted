import { GetVeterinarios } from "../../Servicios/EndpointsVeterinarios";
import { LabelNombre } from "../Atomos/label";
// import { FormularioVeterinario } from "../Organismos/Formulario";
import { FormDeleteVeterinario } from "../Moleculas/BotonDeleteVeterinario";
import { FormularioVeterinario } from "../Organismos/Formulario";
import { TablaDeDatosGenerica } from "../Organismos/TablaDatos";

export function PlantillaVeterinarios() {
  const { datos } = GetVeterinarios();

  return (
    <>
      <div className="container mt-4">
        <LabelNombre nombre="Veterinarios Activos"></LabelNombre>
        <TablaDeDatosGenerica lista={datos}></TablaDeDatosGenerica>
        <FormularioVeterinario></FormularioVeterinario>
        <FormDeleteVeterinario></FormDeleteVeterinario>
      </div>
    </>
  );
}
