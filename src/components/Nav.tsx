import { Logo } from '../assets/Logo';
import { ThemeSwitch } from './ThemeSwitch';
import { useState } from 'react';

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className="
      w-full
      flex 
      justify-between 
      items-center
      lg:px-16
      px-5 
      lg:py-6
      py-5
      border-b 
      border-gray-400 
      font-SpaceGrotesk
      bg-zinc-300
      text-black
      dark:bg-zinc-900
      dark:text-white
    "
    >
      <Logo className="dark:fill-white fill-black" />

      <div className="block lg:hidden">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          {mobileMenuOpen ? (
            <svg
              className="stroke-black dark:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              className="stroke-black dark:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`
        lg:hidden
        absolute
        top-16
        left-0
        w-full
        h-screen
        ${mobileMenuOpen ? '' : 'hidden'}
        bg-zinc-300
        text-black
        dark:bg-zinc-900
        dark:text-white
        px-3
        z-10
        `}
      >
        <ul
          className="
          text-base 
          mr-20
          
        "
        >
          <li className="p-2 hover:bg-zinc-800">
            <a href="#about">Sobre</a>
          </li>
          <li className="p-2 hover:bg-zinc-800">
            <a href="#projects">Projetos</a>
          </li>
          <li className="p-2 hover:bg-zinc-800">
            <a href="#ability's">Habilidades</a>
          </li>
          <li className="p-2 hover:bg-zinc-800">
            <a href="#follow">Contato</a>
          </li>
        </ul>
        <div className="p-2">
          <ThemeSwitch />
        </div>
      </div>

      <div
        className="
          items-center
          hidden 
          lg:flex 
          space-x-4
          "
      >
        <ul
          className="
            flex 
            gap-10 
            text-base 
            mr-20
            "
        >
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#ability's">Habilidades</a>
          </li>
          <li>
            <a href="#follow">Contato</a>
          </li>
        </ul>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
