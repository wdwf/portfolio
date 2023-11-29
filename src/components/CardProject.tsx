import { ReactNode } from 'react';
import codeBar from '../assets/codeBar.png';

export interface CardProps {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}

export function CardProjects({ title, description, image }: CardProps) {
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
          <p className="mt-6 font-Satoshi font-medium text-sm text-justify">{description}</p>
        </div>
        <hr className="w-full border-t-1 border-dashed border-gray-500" />
        <div className="p-6">
          <p className="font-Satoshi font-bold">[ Tecnologias utilizadas ]</p>

          <img src={codeBar} alt="código de barra" />
        </div>
      </div>
    </section>
  );
}
