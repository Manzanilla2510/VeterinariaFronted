interface propsBoton {
  estado: () => void;
  nombre: string;
}

export function Boton(props: propsBoton) {
  const { estado, nombre } = props;
  return (
    <>
      <button type="submit" onClick={estado} className="btn btn-primary mt-3">
        {nombre}
      </button>
    </>
  );
}
