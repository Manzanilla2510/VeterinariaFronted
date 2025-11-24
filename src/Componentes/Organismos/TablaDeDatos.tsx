import type { Veterinario } from "../../Types/Veterinario";
import { LabelNombre } from "../Atomos/label";

interface PropsTabla {
  lista: Veterinario[];
}

export function TablaDeDatos(props: PropsTabla) {
  const { lista } = props;
  if (!lista || lista.length === 0) {
    return <LabelNombre nombre="No hay Datos disponibles"></LabelNombre>;
  }
  const columnas = Object.keys(lista[0]);
  return (
    <table className="table">
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={columna} className="fw-bold text-capitalize">
              {columna}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {lista.map((dato, i) => (
          <tr key={i}>
            {columnas.map((columna) => (
              <td key={columna}>{(dato as any)[columna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
