import { Logo } from '../assets/Logo';
import { Toggle } from './Toggle';

export function Nav() {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-6 border-b border-gray-400 font-SpaceGrotesk">
      <Logo />
      <div className="flex items-center">
        <ul className="flex gap-10 text-base mr-20">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#service">Serviço</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <Toggle />
      </div>
    </nav>
  );
}
