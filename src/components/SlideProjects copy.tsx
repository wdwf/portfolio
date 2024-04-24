import { motion, useMotionValue } from 'framer-motion';

import ThumbnailProjectOne from '../assets/ThumbnailProjectOne.png';
import ThumbnailProjectTwo from '../assets/ThumbnailProjectTwo.png';
import ThumbnailProjectThree from '../assets/ThumbnailProjectThree.png';
import { useEffect, useState } from 'react';
import Dots from './Dots';

const imgs = [ThumbnailProjectOne, ThumbnailProjectTwo, ThumbnailProjectThree];

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
          if (pv === imgs.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-950 py-8">
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
        {imgs.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
            />
          );
        })}
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
    </div>
  );
}
