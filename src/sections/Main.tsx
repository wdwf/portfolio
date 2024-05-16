import { ArrowBigDownDash, Mouse } from 'lucide-react';
import ImageMain from '../assets/ImageMain.png';

export function Main() {
  return (
    <main
      id="main"
      className='2xl:min-h-fit w-full bg-[url("../assets/backgroundMain.png")] bg-no-repeat 2xl:bg-repeat-x relative 2xl:py-12'
    >
      <div className="h-full w-full px-5 pt-5 mt-16 md:px-8 md:pt-8 lg:px-16 md:flex justify-between items-center">
        <div className="w-full mb-8">
          <div className="text-2xl md:text-3xl lg:text-4xl //2xl:text-8xl 2xl:mb-11 md:text-left text-center font-semibold flex flex-col gap-2 mb-8">
            <h2 className="font-SpaceGrotesk">Oi, eu sou o</h2>
            <h2 className="font-SpaceGrotesk text-indigo-600  dark:text-orange-500">Weslley Ferreira</h2>
            <h2 className="font-SpaceGrotesk">Front-End Developer</h2>
          </div>
          <p className="inter dark:text-gray-400 text-gray-700 leading-8 md:w-[98%] lg:w-[85%] md:text-left text-center 2xl:leading-loose 2xl:w-[78%]">
            Formado em Análise e Desenvolvimento de Sistemas, com foco para a web. Especializado como Desenvolvedor
            Front-End, sou habilidoso no desenvolvimento de páginas estáticas, UI design e também possuo conhecimentos
            no desenvolvimento de Backend.
          </p>
        </div>
        <img src={ImageMain} alt="Imagem com stickers e um W grande" className="w-full md:w-2/4 md:h-full lg:w-2/5" />
      </div>
      <div className="animate-bounce mt-8 md:mt-0 lg:mt-6 flex flex-col items-center">
        <Mouse />
        <ArrowBigDownDash />
      </div>
    </main>
  );
}
