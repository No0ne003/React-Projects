// Assets
import githubLogoDark from '../assets/svg/github-mark-white.svg';
import githubLogoLight from '../assets/svg/github-mark.svg';

// Components
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import NavLinks from '@/components/ui/NavLinks';
import { useTheme } from '@/components/theme-provider';

function Header() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Set the theme based on system preference
    if (theme === 'system') {
      // Use the system's color scheme preference
      setTheme(window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light');
    }
  });

  return (
    <header className="container px-6 py-3 flex justify-between items-center backdrop-blur-3xl">
      <Logo />
      <Navigation />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <Link className="focusing" to="React-Project/">
        <span className="font-mono">React</span>
        <span className="font-micro text-[24px] text-primary ps-[1px]">Project</span>
      </Link>
    </div>
  );
}

function Navigation() {
  const { theme } = useTheme();

  return (
    <nav className="flex items-center gap-6">
      <NavLinks
        logo={theme === 'dark' ? githubLogoDark : githubLogoLight}
        name="Github"
        link="https://github.com/No0ne003/React-Project"
      />
      <ModeToggle />
    </nav>
  );
}

export default Header;
