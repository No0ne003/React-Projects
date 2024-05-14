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

function Header({ setCursorVariant }) {

  return (
    <header className="bg-background px-6 py-3 max-h-[60px]">
      <div className="container flex justify-between items-center max-sm:p-0">
        <span
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <Logo />
        </span>
        <Navigation setCursorVariant={setCursorVariant} />
      </div>
    </header>
  );
}

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

function Navigation({ setCursorVariant }) {
  const { theme } = useWhatTheme()

  return (
    <nav className="flex items-center gap-2 sm:gap-6">
      <span
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <DonateToPalestine />
      </span>
      <span
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <NavLinks
          logo={theme === "dark" ? githubLogoDark : githubLogoLight}
          name="Github"
          link="https://github.com/No0ne003/React-Project"
        />
      </span>

      <ModeToggle />
    </nav>
  );
}

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
