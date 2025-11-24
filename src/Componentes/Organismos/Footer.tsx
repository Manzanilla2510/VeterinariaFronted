import { Parrafo } from "../Atomos/Parrafo";
import { FooteLink } from "../Moleculas/FootLink";
import "../../CssGlobal/Footer.css";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <FooteLink />
        <Parrafo />
        <p className="footer-copyright">&copy; 2025 veterinaria.com</p>
      </footer>
    </>
  );
}
