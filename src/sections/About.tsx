import arrowGroup from '../assets/arrowGroup.png';
import lineGroup from '../assets/lineGroup.png';
import photo from '../assets/photo.png';

export function About() {
  return (
    <section id="about" className="w-full pt-14">
      <div className="dark:bg-zinc-300 text-white dark:text-black bg-zinc-900 flex items-center py-6 pl-16 pr-16 gap-9 justify-between">
        <div>
          <p className="text-3xl 2xl:text-5xl font-black font-SpaceGrotesk">Início</p>
          <p className="text-xl 2xl:text-3xl font-black font-SpaceGrotesk">Terça-feira 1, agosto de 2017</p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row 2xl:justify-between">
        <div className="text-gray-700 dark:text-gray-400 py-5 xl:pt-13 lg:pt-10 px-5 lg:pl-16 leading-8 2xl:w-5/6">
          <p className="inter mb-8 2xl:leading-loose">
            Iniciei minha jornada como desenvolvedor Front-End em 2017 por meio do curso de desenhista de páginas para
            web disponibilizado pelo SENAI. Desde então, sigo praticando e desenvolvendo minhas hard skills (Lógica de
            Programação, Engenharia de Software, Desenvolvimento de Banco de dados) através de projetos pessoais e
            profissionais.
          </p>
          <p className="inter 2xl:leading-loose">
            Já atuei em projetos sociais por meio da ong Perifacode, dando aulas de desenvolvimento web (HTML, CSS,
            Javascript). Deste modo auxiliando os demais e prosseguindo com o desenvolvimento de conhecimentos voltados
            a área de programação.
          </p>
        </div>
        <div className="min-w-[250px] 2xl:h-full overflow-hidden">
          <div className="bg-indigo-600 flex items-center justify-center h-12 py-2">
            <img src={arrowGroup} alt="" className="h-full" />
          </div>
          <img src={photo} alt="" className="m-auto  md:w-[45%] lg:w-full 2xl:w-full //2xl:h-full" />
        </div>
      </div>
      <div className="bg-zinc-300 gap-8 flex items-center h-14 py-2 px-8">
        <img src={lineGroup} alt="linhas decorativas" className="h-full" />
        <hr className="border-[1.5px] w-full border-gray-600" />
      </div>
    </section>
  );
}
