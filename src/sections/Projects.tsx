import { CardProjects } from '../components/CardProject';
import ThumbnailProjectOne from '../assets/ThumbnailProjectOne.png';
import { AreaWIP } from '../components/areaWIP';

export function Projects() {
  return (
    <section id="projects" className="w-full my-16 relative">
      <AreaWIP />
      <div className="blur-md">
        <div className="flex items-center pb-8 px-8 justify-between">
          <div className="text-3xl font-Modelica02B">
            <h3>Projetos</h3>
            <h3>Desenvolvidos</h3>
          </div>
          <p className="font-Satoshi text-gray-400 leading-8 w-[42%]">
            Embarcando em uma jornada de aprendizado, posso aos poucos mostrar os frutos desses estudos, onde o código
            se entrelaça com a experiência do usuário.
          </p>
        </div>
        <div className="flex gap-8">
          <CardProjects
            title="Name Project"
            description="Revolucione o aprendizado de inglês com nossa plataforma de videochamadas dedicada a aulas personalizadas. Conecte-se com instrutores qualificados para uma experiência de ensino imersiva e eficaz."
            image={ThumbnailProjectOne}
            frameworks={['React', 'typescript', 'postgresql']}
          />
        </div>
      </div>
    </section>
  );
}
