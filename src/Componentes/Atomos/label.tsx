interface labelprops {
  nombre: string;
}
export function LabelNombre(props: labelprops) {
  const { nombre } = props;
  return (
    <>
      <label className="col-form-label fw-bold fs-4">{nombre}</label>
    </>
  );
}
