import { ChevronRight } from 'lucide-react';
import work from '../assets/WORK.png';

export function Follow() {
  return (
    <section id="follow" className="w-full flex flex-col items-center py-16">
      <img src={work} alt="" className="w-40 animate-spinSlow" />
      <h3 className="text-4xl md:text-5xl text-center font-black font-SpaceGrotesk py-16">Vamos Trabalha juntos</h3>
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
        justify-center
        p-2 px-5 
        border 
        border-gray-700 
        rounded-full
        hover:bg-gray-700
        transition
        "
        >
          <span>Bora de call</span>
          <span>
            <ChevronRight />
          </span>
        </a>
      </div>
    </section>
  );
}
