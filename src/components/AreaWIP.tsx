import fillet from '../assets/fillet.png';

export function AreaWIP() {
  return (
    // <div className="w-full h-full absolute overflow-hidden z-30">
    //   <img src={fillet} alt="" className="scale-150 py-60 lg:scale-110 lg:py-[2%]" />
    // </div>
    <div className="w-full [h-600px] absolute z-30 top-28 lg:top-10 2xl:top-0  lg:left-1/2 lg:transform lg:-translate-x-1/2">
      <img src={fillet} alt="" className="h-56 md:h-[300px] lg:h-[380px] 2xl:h-[500px] object-cover m-auto" />
    </div>
  );
}
