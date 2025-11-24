interface propsAlertas {
  mensaje: string;
}
export function Alertas(props: propsAlertas) {
  const { mensaje } = props;
  return (
    <>
      <div className="alert alert-success">{mensaje}</div>
    </>
  );
}
