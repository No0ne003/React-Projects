import { Button } from "@/components/ui/button";
import { memo } from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { link: "https://github.com/No0ne003/React-Projects", icon: <FaGithub /> },
  { link: "https://instagram.com/No0ne.003", icon: <FaInstagram /> },
  { link: "https://x.com/No0ne003", icon: <FaTwitter /> },
];

const Footer = memo(function Footer({ setCursorVariant }) {
  return (
    <footer
      className="relative mt-20 w-full min-h-[220px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="footer-shadow" />
      <div className="relative h-[calc(100vh+220px)] -top-[100vh]">
        <div className="h-[220px] sticky top-[calc(100vh-220px)]">
          <Content setCursorVariant={setCursorVariant} />
        </div>
      </div>
    </footer>
  );
});

const Content = ({ setCursorVariant }) => {
  return (
    <div className="relative bg-secondary/40 overflow-hidden py-8 px-12 w-full h-full flex flex-col items-center gap-3 border-border/50 border-2">
      <p className="self-start text-4xl sm:text-7xl max-w-full md:max-w-8xl font-bold text-gray-500/60">
        Awesome React js Projects
      </p>

      <div className="flex flex-col gap-3 justify-end h-full w-full">
        <div className="flex justify-center w-full gap-1 text-xs sm:text-sm">
          <p>Made with &lt;3 by No0ne</p>
          <p className="text-gray-400 text-sm leading-5">
            | &copy; {new Date().getFullYear()} No0ne003.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-2">
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
  );
};

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
