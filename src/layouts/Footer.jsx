import { Button } from "@/components/ui/button";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { link: "https://github.com/No0ne003/React-Projects", icon: <FaGithub /> },
  { link: "https://instagram.com/No0ne.003", icon: <FaInstagram /> },
  { link: "https://x.com/No0ne003", icon: <FaTwitter /> },
];

const Footer = ({ setCursorVariant }) => (
  <footer className="flex flex-col items-center justify-center bg-secondary/40 py-5 text-sm">
    <div className="relative z-10 overflow-hidden">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="max-w-md">Awesome React js Projects</p>
        <div className="flex justify-center w-full gap-1">
          <p>Made with &lt;3 by No0ne</p>
          <p className="text-foreground/85 text-sm leading-5">
            | &copy; {new Date().getFullYear()} No0ne003.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          {socialLinks.map(({ link, icon }) => (
            <FooterLink
              key={link}
              setCursorVariant={setCursorVariant}
              link={link}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const FooterLink = ({ setCursorVariant, link, icon }) => {
  const handleMouseEnter = () => setCursorVariant("text");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <Button
      className="bg-transparent"
      variant="outline"
      size="icon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      asChild
    >
      <Link to={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>
    </Button>
  );
};

export default Footer;
