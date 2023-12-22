import { ReactNode } from 'react';
import Loopw from '../assets/loopw.png';
import codeBar from '../assets/codeBar.png';

export interface CardProps {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
  frameworks: string[];
}

export function CardProjects({ title, description, image, frameworks }: CardProps) {
  return (
    <section className="relative rounded-xl bg-slate-100 w-11/12 text-slate-950 lg:flex lg:h-[280px] lg:max-w-5xl">
      <div className="w-9 h-9 dark:bg-zinc-900 bg-slate-100 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-top-1 lg:top-1/2 lg:left-0"></div>
      <div className="w-9 h-9 dark:bg-zinc-900 bg-slate-100 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:-bottom-1 lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:translate-x-1/2 lg:left-auto"></div>

      <div className="relative p-3 md:p-7 lg:p-4 lg:flex lg:justify-center">
        <img src={image} alt="imagem do projeto" className="rounded-md 2xl:object-cover" />
        <img
          src={Loopw}
          alt="logo do portfolio"
          className="absolute -top-7 -right-8 scale-50 md:scale-75 md:-top-2 md:-right-2"
        />
      </div>

      <div className="relative w-full my-2 md:my-1 h-2 lg:hidden">
        <div className="w-3 h-3 dark:bg-zinc-900 bg-slate-100 rounded-full absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-[40%] z-10"></div>
        <div className="w-3 h-3 dark:bg-zinc-900 bg-slate-100 rounded-full absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-[40%] z-10"></div>
        <div className="w-full h-[1px] border-t-1  border-dashed border-[1px] border-gray-500 absolute top-1/2 transform -translate-x-1 translate-y-1/2"></div>
      </div>

      <div className="hidden relative lg:block w-2 h-full">
        <div className="w-3 h-3 dark:bg-zinc-900 bg-slate-100 rounded-full absolute -top-0 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
        <div className="w-3 h-3 dark:bg-zinc-900 bg-slate-100 rounded-full absolute -bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10"></div>
        <div className="w-[1px] h-full border-l-1 border-dashed border-[1px] border-gray-500 "></div>
      </div>

      <div className="w-full justify-between p-3 pb-5 lg:px-7 lg:flex lg:relative">
        <div className="flex md:gap-12">
          <div className="">
            <div>
              <h3 className="text-orange-500 font-Roboto text-xs font-bold">PROJETO</h3>
              <h3 className="font-Roboto text-lg lg:text-3xl font-bold">{title}</h3>
            </div>
            <div className="hidden lg:block lg:my-6">
              <p className="font-Satoshi text-sm font-bold mb-2 pl-1">[ Tecnologias utilizadas ]</p>
              <div className="mb-4 flex flex-wrap gap-3 pl-1">
                {frameworks.map((tech, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center border-2 border-gray-900 rounded-full w-8 h-8 p-[5px]"
                  >
                    <img src={`../public/${tech}.png`} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <p className="overflow-hidden line-clamp-4 my-3 font-Satoshi font-medium text-sm max-h-24 md:max-w-xs lg:max-w-[17rem]">
              {description}
            </p>
          </div>
          <div className="hidden md:block lg:hidden">
            <p className="font-Satoshi text-sm font-bold mb-4 pl-1">[ Tecnologias utilizadas ]</p>
            <div className="mb-4 flex flex-wrap gap-3 pl-1">
              {frameworks.map((tech, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center border-2 border-gray-900 rounded-full w-8 h-8 p-[5px]"
                >
                  <img src={`../public/${tech}.png`} alt="" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <p className="font-Roboto text-[0.50rem] pl-1">PRODUZIDO POR LOOPW</p>
              <img src={codeBar} alt="código de barrar" className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:hidden lg:flex lg:justify-end lg:absolute lg:-rotate-90 lg:top-1/2 lg:right-11 lg:transform lg:translate-x-1/2 lg:-translate-y-1/2">
          <p className="font-Roboto text-[0.50rem] lg:text-center">PRODUZIDO POR LOOPW</p>
          <img src={codeBar} alt="código de barrar" className="scale-[.65]" />
        </div>
      </div>
    </section>
  );
}
