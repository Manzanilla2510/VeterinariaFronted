interface propsTitulo {
  nombre: string;
}
export function Titulo(props: propsTitulo) {
  const { nombre } = props;
  return (
    <>
      <h1>{nombre}</h1>
    </>
  );
}
