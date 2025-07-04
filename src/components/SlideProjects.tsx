import ThumbnailProjectOne from '../assets/ThumbnailProjectOne.png';
import ThumbnailProjectTwo from '../assets/ThumbnailProjectTwo.png';
import ThumbnailProjectThree from '../assets/ThumbnailProjectThree.png';
import ThumbnailProjectFour from '../assets/ThumbnailProjectFour.png';
import ThumbnailProjectFive from '../assets/ThumbnailProjectFive.png';
import react from '../assets/react.png';
import typescript from '../assets/typescript.png';
import figma from '../assets/figma.png';

import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CardProjects } from './CardProject';
import Dots from './Dots';

const projects = [
  {
    title: 'PORTFOLIO',
    description: 'Criei essa pagina para mostrar meus projetos e demostrar meus conhecimentos.',
    image: ThumbnailProjectOne,
    frameworks: [
      { name: 'React', image: react },
      { name: 'Typescript', image: typescript },
      { name: 'Figma', image: figma },
    ],
    link: 'https://loopw.tech/',
  },
  {
    title: 'HMD System',
    description:
      'Projeto para composição de teste voltado para o frontend simulando carrinho de compras de um e-commerce.',
    image: ThumbnailProjectTwo,
    frameworks: [
      { name: 'React', image: react },
      { name: 'Typescript', image: typescript },
    ],
    link: 'https://hmd-project.vercel.app/',
  },
  {
    title: 'Pass In Web',
    description: 'Projeto que simula uma aplicação de gestão de eventos e participantes.',
    image: ThumbnailProjectThree,
    frameworks: [
      { name: 'React', image: react },
      { name: 'Typescript', image: typescript },
      { name: 'Figma', image: figma },
    ],
    link: 'https://wdwf.github.io/pass-in-web/',
  },
  {
    title: 'Game Store',
    description: 'Concepção do backend de uma plataforma de venda de games.',
    image: ThumbnailProjectFour,
    frameworks: [
      { name: 'React', image: react },
      { name: 'Typescript', image: typescript },
      { name: 'Figma', image: figma },
    ],
    link: 'https://github.com/wdwf/GameStore',
  },
  {
    title: "Javason's Five",
    description: 'Esta é o pagina de portfolio desenvolvida pelo meu amado grupo de amigos.',
    image: ThumbnailProjectFive,
    frameworks: [
      { name: 'React', image: react },
      { name: 'Typescript', image: typescript },
      { name: 'Figma', image: figma },
    ],
    link: 'https://grupo5generation81.github.io/portfolio_team/',
  },
];

const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const AUTO_DELAY = 8000;

const EXTENDED_PROJECTS = [
  projects[projects.length - 1], // Slide fantasma (último) no início
  ...projects,
  projects[0], // Slide fantasma (primeiro) no final
];

export default function SlideProjects() {
  const [index, setIndex] = useState(1); // começa no 1 (primeiro real)
  const [isAnimating, setIsAnimating] = useState(true);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoopEdges = () => {
    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(projects.length);
      }, 300);
    } else if (index === projects.length + 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(1);
      }, 300);
    }
  };

  useEffect(() => {
    handleLoopEdges();
  }, [index]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => setIsAnimating(true), 50); // reactiva animação depois do "teleporte"
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dragX.get() === 0) {
        setIndex((prev) => prev + 1);
      }
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      setIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8" ref={containerRef}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={onDragEnd}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${index * 100}%`,
        }}
        transition={isAnimating ? SPRING_OPTIONS : { duration: 0 }}
        // className="flex items-center cursor-grab active:cursor-grabbing"
        className="flex cursor-grab active:cursor-grabbing"
      >
        {EXTENDED_PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className="flex w-full shrink-0 justify-center"
          >
            <CardProjects
              idx={idx}
              imgIndex={index - 1} // Corrigido para o índice real
              title={proj.title}
              link={proj.link}
              description={proj.description}
              image={proj.image}
              frameworks={proj.frameworks}
              transition={SPRING_OPTIONS}
            />
          </div>
        ))}
      </motion.div>
      {/* Ajuste nos pontos (Dots) para mostrar o slide atual (ignorando os fantasmas) */}
      <Dots
        imgIndex={(index - 1 + projects.length) % projects.length}
        setImgIndex={(i) => setIndex(Number(i) + 1)} // +1 porque o carrossel real começa do index 1
        projects={projects}
      />
    </div>
  );
}
