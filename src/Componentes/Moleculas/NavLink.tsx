import { Links } from "../Atomos/links";
import "../../CssGlobal/NavLink.css";
export function NavLink() {
  return (
    <>
      <div className="nav-links">
        <Links to="/Inventario" nombre="Inventario" />
        <Links to="/revisiones" nombre="Revisiones" />
        <Links to="/veterinarios" nombre="Veterinarios" />
        <Links to="/animales" nombre="Animal" />
        <Links to="/alimentacion" nombre="Alimentación" />
      </div>
    </>
  );
}
