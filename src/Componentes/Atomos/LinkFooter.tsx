interface linksprops {
  link: string;
  nombre: string;
}
export function LinksFotters(props: linksprops) {
  const { link, nombre } = props;
  return (
    <>
      <a
        href={link}
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: 500,
        }}
      >
        {nombre}
      </a>
    </>
  );
}
