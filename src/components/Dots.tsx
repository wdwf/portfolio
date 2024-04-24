import { Dispatch, SetStateAction } from 'react';

export default function Dots({
  imgIndex,
  setImgIndex,
  projects,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  projects: {
    title: string;
    description: string;
    image: string;
    frameworks: string[];
  }[];
}) {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {projects.map((_, idx) => {
        return (
          <button
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
            }`}
            onClick={() => setImgIndex(idx)}
            key={idx}
          />
        );
      })}
    </div>
  );
}
