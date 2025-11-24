import "../../CssGlobal/FootLink.css";
import { FooterLink } from "../Atomos/FooterLink";

export function FooteLink() {
  return (
    <>
      <div className="footer-links">
        <FooterLink link="https://www.instagram.com/" nombre="Instagram" />
        <FooterLink link="https://x.com/" nombre="Twitter" />
        <FooterLink link="https://www.facebook.com/" nombre="Facebook" />
        <FooterLink link="https://www.tiktok.com/" nombre="Tiktok" />
      </div>
    </>
  );
}
