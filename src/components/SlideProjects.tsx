import { motion, useMotionValue } from 'framer-motion';

import ThumbnailProjectOne from '../assets/ThumbnailProjectOne.png';
import ThumbnailProjectTwo from '../assets/ThumbnailProjectTwo.png';
import ThumbnailProjectThree from '../assets/ThumbnailProjectThree.png';
import reactIcon from '../assets/react.png';
import typescriptIcon from '../assets/typescript.png';

import { useEffect, useState } from 'react';
import Dots from './Dots';
import { CardProjects } from './CardProject';

const projects = [
  {
    title: 'PORTFOLIO',
    description: 'Criei essa pagina para mostrar meus projetos e demostrar meus conhecimentos.',
    image: ThumbnailProjectOne,
    frameworks: [reactIcon, typescriptIcon],
    link: 'https://loopw.tech/',
  },
  {
    title: 'HMD System',
    description:
      'Projeto para composição de teste voltado para o frontend simulando carrinho de compras de um e-commerce.',
    image: ThumbnailProjectTwo,
    frameworks: [reactIcon, typescriptIcon],
    link: 'https://hmd-project.vercel.app/',
  },
  {
    title: 'Pass In Web',
    description: 'Projeto que simula uma aplicação de gestão de eventos e participantes.',
    image: ThumbnailProjectThree,
    frameworks: [reactIcon, typescriptIcon],
    link: 'https://wdwf.github.io/pass-in-web/',
  },
];

const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const ONE_SECOND = 2000;
const AUTO_DELAY = ONE_SECOND * 10;

export default function SlideProjects() {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === projects.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        {projects.map((projSrc, idx) => {
          return (
            <div className="flex w-screen shrink-0 justify-center 2xl:w-[73vw]">
              <CardProjects
                key={idx}
                transition={SPRING_OPTIONS}
                idx={idx}
                imgIndex={imgIndex}
                title={projSrc.title}
                link={projSrc.link}
                description={projSrc.description}
                image={projSrc.image}
                frameworks={projSrc.frameworks}
              />
            </div>
          );
        })}
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} projects={projects} />
    </div>
  );
}
