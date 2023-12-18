import { ArrowBigDownDash, Mouse } from 'lucide-react';
import ImageMain from '../assets/ImageMain.png';

export function Main() {
  return (
    <main id="main" className='min-h-screen w-full bg-[url("../assets/backgroundMain.png")] relative'>
      <div className="h-full w-full flex items-center justify-between lg:px-16 lg:pt-16 sm:px-11 sm:pt-11">
        <div className="w-2/4 md-[425px]:flex md-[425px]:flex-wrap">
          <div className="font-SpaceGrotesk lg:text-4xl md:text-3xl sm:text-sm font-semibold flex flex-col gap-2 mb-16">
            <h2>Oi, eu sou o</h2>
            <h2 className="text-orange-500">Weslley Ferreira</h2>
            <h2>Front-End Developer</h2>
          </div>
          <p className="font-Satoshi text-gray-400 lg:w-[30rem] md:w-full leading-8">
            Formado em Analise e Desenvolvimento de Sistemas, com foco para a web. Especializado como Desenvolvedor
            FrontEnd, sou habilidoso no desenvolvimento de páginas estáticas, UI design e também possuo conhecimentos no
            desenvolvimento de Backend.
          </p>
        </div>
        <img src={ImageMain} alt="" className="h-80" />
      </div>
      <div className="animate-bounce mt-16 flex flex-col items-center">
        <Mouse />
        <ArrowBigDownDash />
      </div>
    </main>
  );
}
