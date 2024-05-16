import { ChevronRight } from 'lucide-react';
import { CircleWork } from '../assets/CircleWork';

export function Follow() {
  return (
    <section id="follow" className="w-full flex flex-col items-center py-24">
      <CircleWork svgAnimate="animate-spinSlow 2xl:w-[180px] 2xl:h-[180px]" className="dark:fill-white fill-zinc-900" />
      <h3 className="text-4xl md:text-5xl text-center font-black font-SpaceGrotesk py-16">Vamos trabalhar juntos?</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <a
          href="mailto:weslley.lw@outlook.com"
          className="
        p-2 px-5 
        border 
        border-gray-700 
        rounded-full
        hover:bg-gray-700
        transition
        2xl:text-3xl
        inter
        "
        >
          weslley.lw@outlook.com
        </a>
        <a
          href="https://linkedin.com/in/weslleyferreira"
          target="_blank"
          rel="noopener noreferrer"
          className="
        flex
        items-center
        justify-center
        p-2 px-5 
        border 
        border-gray-700 
        rounded-full
        hover:bg-gray-700
        transition
        2xl:text-3xl
        inter
        "
        >
          <span className="inter">Bora de call</span>
          <span>
            <ChevronRight />
          </span>
        </a>
      </div>
    </section>
  );
}
