import { useState } from "react";
import { Alertas } from "../Atomos/Alertas";
import { Boton } from "../Atomos/Boton";

export function BotonObtenerdatos() {
  const [Estado, setEstado] = useState(false);
  const click = () => {
    setEstado(true);
  };
  setTimeout(() => {
    setEstado(false);
  }, 3000);
  return (
    <>
      {Estado && (
        <Alertas mensaje="Se Guaradaron Los Catos Correctamente"></Alertas>
      )}
      <Boton estado={click} nombre="Guardar Datos"></Boton>
    </>
  );
}
