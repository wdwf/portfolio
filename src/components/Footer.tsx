import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-4/5 flex justify-between border-t border-gray-600 py-8 font-semibold font-Satoshi">
        <article>
          <p>© 2022 LoopW - Weslley Ferreira</p>
        </article>
        <article className="flex gap-8">
          <a href="https://linkedin.com/in/weslleyferreira" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/wdwf" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </article>
        <ul className="flex gap-8">
          <li>
            <a href="#main">Principal</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#ability's">Habilidades</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
