import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <section className="px-5 w-full flex justify-center">
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-5 justify-between border-t border-gray-600 py-8 font-semibold font-Satoshi">
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
        <ul className="flex flex-wrap gap-8 ">
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
