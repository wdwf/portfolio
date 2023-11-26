import shape from '../assets/shape.png';
import arrowGroup from '../assets/arrowGroup.png';
import lineGroup from '../assets/lineGroup.png';

export function About() {
  return (
    <section>
      <div>
        <div>
          <p>Inicio</p>
          <p>Agosto, Terça-feira 1, 2017</p>
        </div>
        <span></span>
        <img src={shape} alt="forma simples" />
      </div>
      <div>
        <div>
          <p>
            Iniciei minha jornada como desenvolvedor Front-End em 2017 por meio do curso de desenhista de páginas para
            web disponibilizado pelo SENAI. Desde então, sigo praticando e desenvolvendo minhas hard skills (Javascript,
            React, React Native, Postgre) através de projetos pessoais e profissionais.
          </p>
          <p>
            Venho atuando em projetos sociais por meio da ong Perifacode, dando aulas de desenvolvimento web (HTML, CSS,
            Javascript). Deste modo auxilio os demais e sigo aprendendo a desenvolver conhecimentos voltados a área de
            programação.
          </p>
        </div>
        <div>
          <img src={arrowGroup} alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <img src={lineGroup} alt="linhas decorativas" />
      </div>
    </section>
  );
}
