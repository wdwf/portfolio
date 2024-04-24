import SlideProjects from '../components/SlideProjects';
// import { AreaWIP } from '../components/AreaWIP';

export function Projects() {
  return (
    <section id="projects" className="w-full my-16 relative">
      {/* <AreaWIP /> */}
      {/* <div className="blur-md"> */}
      <div className="flex flex-col lg:flex-row pb-8 px-8 justify-between">
        <div className="text-3xl lg:text-5xl lg:pl-16 text-center lg:text-left mb-6">
          <h3 className="font-SpaceGrotesk">Projetos</h3>
          <h3 className="font-SpaceGrotesk">Desenvolvidos</h3>
        </div>
        <p className="font-Satoshi leading-8 text-center lg:text-left lg:w-[50%] 2xl:pt-2 dark:text-gray-400 text-gray-700">
          Embarcando em uma jornada de aprendizado, posso aos poucos mostrar os frutos desses estudos, onde o código se
          entrelaça com a experiência do usuário.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* <CardProjects
          title="PORTFOLIO"
          description="Criei essa pagina para mostrar meus projetos e demostrar meus conhecimentos."
          image={ThumbnailProjectThree}
          frameworks={['React', 'typescript', 'postgresql']}
        /> */}
      </div>
      <SlideProjects />
      {/* </div> */}
    </section>
  );
}
