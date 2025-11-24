import { Link } from "react-router-dom";
import "../../CssGlobal/Link.css";
interface linksprops {
  to: string;
  nombre: string;
}
export function Links(props: linksprops) {
  const { to, nombre } = props;
  return (
    <>
      <Link className="link" to={to}>
        {nombre}
      </Link>
    </>
  );
}
