interface labelprops {
  nombre: string;
}
export function LabelNombre(props: labelprops) {
  const { nombre } = props;
  return (
    <>
      <label
        style={{
          fontWeight: "bold",
          fontSize: "1.9rem",
        }}
      >
        {nombre}
      </label>
    </>
  );
}
