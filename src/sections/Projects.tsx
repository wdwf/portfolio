import { CardProjects } from '../components/cardProject';
import ThumbnailProjectOne from '../assets/ThumbnailProjectOne.png';

export function Projects() {
  return (
    <section>
      <div>
        <div>
          <h3>Projetos</h3>
          <h3>Desenvolvidos</h3>
        </div>
        <p>
          Embarcando em uma jornada de aprendizado, posso aos poucos mostrar os frutos desses estudos, onde o código se
          entrelaça com a experiência do usuário.
        </p>
      </div>
      <div>
        <CardProjects
          title="Name Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae facilisis nisi, non fringilla ex. Aliquam dictum eleifend."
          image={ThumbnailProjectOne}
        />
      </div>
    </section>
  );
}
