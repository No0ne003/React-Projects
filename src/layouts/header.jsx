// Assets
import githubLogoDark from '@/assets/svg/github-mark-white.svg';
import githubLogoLight from '@/assets/svg/github-mark.svg';
import palestineSvg from '@/assets/svg/Flag_of_Palestine.svg';

// Components
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import NavLinks from '@/components/ui/NavLinks';
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider';
import { useEffect } from 'react';

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
    <header className="container px-6 py-3 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
      <Logo />
      <Navigation />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo cursor-pointer">
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
    <nav className="flex items-center gap-2 sm:gap-6">
      <DonateToPalestine />
      <NavLinks
        logo={theme === 'dark' ? githubLogoDark : githubLogoLight}
        name="Github"
        link="https://github.com/No0ne003/React-Project"
      />
      <ModeToggle />
    </nav>
  );
}

function DonateToPalestine() {
  return (
    <Button variant="outline" asChild>
      <a className='sm:space-x-2 sm:flex sm:items-center' href="https://donate.unrwa.org/gaza/~my-donation?_cv=1" target='_blank' rel='noopener noreferrer'>
        <img className="size-4" src={palestineSvg} alt="Palestine" />
        <span className='hidden sm:block'>Donate Now</span>
      </a>
    </Button>
  )
}


export default Header;
