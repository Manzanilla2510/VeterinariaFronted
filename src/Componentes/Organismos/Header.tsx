import { Logito } from "../Atomos/Logo";
import { NavLink } from "../Moleculas/NavLink";
import "../../CssGlobal/Navbar.css";
export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <Logito />
        </div>
        <div className="nav-links">
          <NavLink></NavLink>
        </div>
      </nav>
    </>
  );
}
