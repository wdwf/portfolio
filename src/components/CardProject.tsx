import { ReactNode } from 'react';
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
    <section className="w-[16rem] bg-slate-100 rounded-3xl text-slate-950 ">
      <div className="w-full h-[16rem] border-b-2 border-solid border-gray-900 rounded-t-3xl flex items-center">
        <img src={image} alt="imagem do projeto" className="rounded-t-3xl w-full" />
      </div>
      <div>
        <div className="p-6">
          <h4 className='font-Satoshi font-bold flex items-center gap-2 before:content-[""] before:block before:bg-gray-500 before:h-5 before:w-[0.1rem]'>
            {title}
          </h4>
          <p className="overflow-hidden line-clamp-6 mt-6 font-Satoshi font-medium text-sm text-justify max-h-32 h-full">
            {description}
          </p>
        </div>
        <hr className="w-full border-t-1 border-dashed border-gray-500" />
        <div className="p-6">
          <p className="font-Satoshi font-bold mb-4">[ Tecnologias utilizadas ]</p>
          <div className="mb-4 flex flex-wrap gap-3">
            {frameworks.map((tech, index) => (
              <div
                key={index}
                className="flex justify-center items-center border-2 border-gray-900 rounded-full w-8 h-8 p-[5px]"
              >
                <img src={`../public/${tech}.png`} alt="" />
              </div>
            ))}
          </div>
          <img src={codeBar} alt="código de barra" />
        </div>
      </div>
    </section>
  );
}
