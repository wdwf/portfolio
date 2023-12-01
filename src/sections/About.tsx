import shape from '../assets/shape.png';
import arrowGroup from '../assets/arrowGroup.png';
import lineGroup from '../assets/lineGroup.png';
import photo from '../assets/photo.png';

export function About() {
  return (
    <section id="about" className="min-h-screen mt-3 //bg-slate-600">
      <div className="bg-zinc-300 text-black flex items-center px-16 h-40 gap-9 justify-between">
        <div>
          <p className="text-3xl font-black font-Modelica02B">Inicio</p>
          <p className="text-xl font-black font-Modelica02M">Agosto, Terça-feira 1, 2017</p>
        </div>
        <div className="border-x-2 border-gray-600 px-8 h-4/5 w-2/4 flex items-center">
          <hr className="border-[1.5px] w-full border-gray-600" />
        </div>
        <img src={shape} alt="forma simples" className="h-3/5 mr-7" />
      </div>
      <div className="flex">
        <div className="font-Satoshi text-gray-400 pt-10 pl-16 pr-52 leading-8">
          <p className="mb-8">
            Iniciei minha jornada como desenvolvedor Front-End em 2017 por meio do curso de desenhista de páginas para
            web disponibilizado pelo SENAI. Desde então, sigo praticando e desenvolvendo minhas hard skills (Logica de
            Programação, Engenharia de Software, Desenvolvimento de Banco de dados) através de projetos pessoais e
            profissionais.
          </p>
          <p>
            Ja atuei em projetos sociais por meio da ong Perifacode, dando aulas de desenvolvimento web (HTML, CSS,
            Javascript). Deste modo auxiliando os demais e prosseguindo com o desenvolvimento de conhecimentos voltados
            a área de programação.
          </p>
        </div>
        <div className="min-w-[250px]">
          <div className="bg-indigo-600 flex items-center justify-center h-12 py-2">
            <img src={arrowGroup} alt="" className="h-full" />
          </div>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="bg-zinc-300 gap-8 flex items-center min-h-[50px] h-14 py-2 px-8">
        <img src={lineGroup} alt="linhas decorativas" className="h-full " />
        <hr className="border-[1.5px] w-full border-gray-600" />
      </div>
    </section>
  );
}
