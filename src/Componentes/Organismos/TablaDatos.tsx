import { LabelNombre } from "../Atomos/label";
import "../../CssGlobal/TablaDeDatos.css";

interface PropsTablaGenerica<T extends object> {
  lista: T[];
}

export function TablaDeDatosGenerica<T extends object>({
  lista,
}: PropsTablaGenerica<T>) {
  if (!lista || lista.length === 0) {
    return <LabelNombre nombre="No hay datos disponibles" />;
  }

  const columnas = Object.keys(lista[0]);

  return (
    <div className="tabla-container">
      <table className="tabla-datos">
        <thead>
          <tr>
            {columnas.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {lista.map((item, i) => (
            <tr key={i}>
              {columnas.map((col) => (
                <td key={col}>{(item as any)[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
