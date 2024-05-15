import { memo } from "react";
// Assets
import githubLogoDark from "@/assets/svg/github-mark-white.svg";
import githubLogoLight from "@/assets/svg/github-mark.svg";
import palestineSvg from "@/assets/svg/Flag_of_Palestine.svg";

// Components
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import NavLinks from "@/components/ui/NavLinks";
import { Button } from "@/components/ui/button";
import useWhatTheme from "@/lib/utils";

const Header = memo(function Header({ setCursorVariant }) {
  const handleMouseEnter = () => setCursorVariant("text");
  const handleMouseLeave = () => setCursorVariant("default");
  const { theme } = useWhatTheme();

  return (
    <header className="bg-background px-6 py-3 max-h-[60px] w-full">
      <div className="container flex justify-between items-center max-sm:p-0">
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Logo />
        </span>
        <Navigation setCursorVariant={setCursorVariant} theme={theme} />
      </div>
    </header>
  );
});

function Logo() {
  return (
    <div className="logo cursor-pointer">
      <Link className="focusing" to="React-Projects/">
        <span className="font-mono">React</span>
        <span className="font-micro text-[24px] text-primary ps-[1px]">
          Projects
        </span>
      </Link>
    </div>
  );
}

const Navigation = ({ setCursorVariant, theme }) => {
  const handleMouseEnter = () => setCursorVariant("text");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <nav className="flex items-center gap-2 sm:gap-6">
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DonateToPalestine />
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavLinks
          logo={theme === "dark" ? githubLogoDark : githubLogoLight}
          name="Github"
          link="https://github.com/No0ne003/React-Project"
        />
      </span>
      <ModeToggle />
    </nav>
  );
};

function DonateToPalestine() {
  return (
    <Button variant="outline" asChild>
      <a
        className="sm:space-x-2 sm:flex sm:items-center"
        href="https://donate.unrwa.org/gaza/~my-donation?_cv=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="size-4" src={palestineSvg} alt="Palestine" />
        <span className="hidden sm:block">Donate Now</span>
      </a>
    </Button>
  );
}

export default Header;
