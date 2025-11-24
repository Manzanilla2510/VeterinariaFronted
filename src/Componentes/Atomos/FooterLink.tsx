import "../../CssGlobal/FooterLink.css";
interface FooterLinkProps {
  link: string;
  nombre: string;
}

export function FooterLink({ nombre, link }: FooterLinkProps) {
  return (
    <a
      href={link}
      className="footer-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {nombre}
    </a>
  );
}
