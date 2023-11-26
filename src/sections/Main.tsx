import { ArrowBigDownDash, Mouse } from 'lucide-react';
import ImageMain from '../assets/ImageMain.png';

export function Main() {
  return (
    <main className='min-h-screen w-full bg-[url("../assets/backgroundMain.png")] relative'>
      <div className="h-full w-full flex items-center justify-between px-8 pt-16">
        <div className="w-2/4">
          <div className="font-SpaceGrotesk text-6xl font-semibold flex flex-col gap-2 mb-16">
            <h2>Oi, eu sou o</h2>
            <h2 className="text-orange-500">Weslley Ferreira</h2>
            <h2>Front-End Developer</h2>
          </div>
          <p className="font-Satoshi text-gray-400 w-[30rem] leading-8">
            Formado em Analise e Desenvolvimento de Sistemas, com foco para a web. Especializado como Desenvolvedor
            FrontEnd, sou habilidoso no desenvolvimento de páginas estáticas, UI design e também possuo conhecimentos no
            desenvolvimento de Backend.
          </p>
        </div>
        <img src={ImageMain} alt="" className="h-96" />
      </div>
      <div className="animate-bounce mt-5 flex flex-col items-center">
        <Mouse />
        <ArrowBigDownDash />
      </div>
    </main>
  );
}
