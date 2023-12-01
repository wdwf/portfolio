import { Logo } from '../assets/Logo';
import { ThemeSwitch } from './ThemeSwitch';

export function Nav() {
  return (
    <nav
      className="
        flex 
        items-center 
        justify-between 
        w-full 
        px-16 
        py-8
        border-b 
        border-gray-400 
        font-SpaceGrotesk
        bg-zinc-300
        text-black
        dark:bg-zinc-900
        dark:text-white
      "
    >
      <Logo />
      <div className="flex items-center">
        <ul className="flex gap-10 text-base mr-20">
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
