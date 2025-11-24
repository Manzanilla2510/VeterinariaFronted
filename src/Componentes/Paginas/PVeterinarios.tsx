import { GetVeterinarios } from "../../Servicios/EndpointsVeterinarios";
import { LabelNombre } from "../Atomos/label";
import { Navbar } from "../Organismos/Header";
import { TablaDeDatos } from "../Organismos/TablaDeDatos";

export function PaginaVeterinarios() {
  const { datos } = GetVeterinarios();

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-4">
        <LabelNombre nombre="Veterinarios Activos"></LabelNombre>
        <TablaDeDatos lista={datos} />
      </div>
    </>
  );
}
