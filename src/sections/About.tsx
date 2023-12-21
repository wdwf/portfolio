import shape from '../assets/shape.png';
import arrowGroup from '../assets/arrowGroup.png';
import lineGroup from '../assets/lineGroup.png';
import photo from '../assets/photo.png';

export function About() {
  return (
    <section id="about" className="w-full min-h-screen mt-3">
      <div className="bg-zinc-300 text-black flex items-center py-6 pl-5 lg:pl-16 gap-9 justify-between">
        <div>
          <p className="text-3xl font-black font-Modelica02B">Inicio</p>
          <p className="text-xl font-black font-Modelica02M">Agosto, Terça-feira 1, 2017</p>
        </div>
        <div className="hidden lg:flex border-x-2 border-gray-600 px-8 h-16 w-2/4 items-center">
          <hr className="border-[1.5px] w-full border-gray-600" />
        </div>
        <img src={shape} alt="forma simples" className="h-3/5 mr-7 hidden lg:block" />
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="font-Satoshi text-gray-700 dark:text-gray-400 py-5 xl:pt-14 lg:pt-10 px-5 lg:pl-16 leading-8">
          <p className="mb-8 ">
            Iniciei minha jornada como desenvolvedor Front-End em 2017 por meio do curso de desenhista de páginas para
            web disponibilizado pelo SENAI. Desde então, sigo praticando e desenvolvendo minhas hard skills (Logica de
            Programação, Engenharia de Software, Desenvolvimento de Banco de dados) através de projetos pessoais e
            profissionais.
          </p>
          <p className="">
            Ja atuei em projetos sociais por meio da ong Perifacode, dando aulas de desenvolvimento web (HTML, CSS,
            Javascript). Deste modo auxiliando os demais e prosseguindo com o desenvolvimento de conhecimentos voltados
            a área de programação.
          </p>
        </div>
        <div className="min-w-[250px]">
          <div className="bg-indigo-600 flex items-center justify-center h-12 py-2">
            <img src={arrowGroup} alt="" className="h-full" />
          </div>
          <img src={photo} alt="" className="m-auto" />
        </div>
      </div>
      <div className="bg-zinc-300 gap-8 flex items-center min-h-[50px] h-14 py-2 px-8">
        <img src={lineGroup} alt="linhas decorativas" className="h-full " />
        <hr className="border-[1.5px] w-full border-gray-600" />
      </div>
    </section>
  );
}
