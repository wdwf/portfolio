import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export function ThemeSwitch() {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-3">
      <label className="font-SpaceGrotesk inline-block hover:cursor-pointer w-12 2xl:w-28 2xl:text-4xl">
        {currentTheme === 'light' ? 'Claro' : 'Escuro'}
      </label>

      <input
        type="checkbox"
        id="flexSwitch"
        className="
        origin-center
        -rotate-45
        appearance-none
        border
        border-gray-400
        mr-2 
        mt-[0.3rem] 
        h-4 
        w-9 
        rounded-[0.4375rem]
        bg-transparent
        
        before:pointer-events-none 
        before:absolute 
        before:h-3.5 
        before:w-3.5 
        before:rounded-full 
        before:bg-transparent 
        before:content-[''] 

        after:absolute 
        after:z-[2] 
        after:mt-[0.05rem]
        after:ml-[0.05rem]
        after:h-3 
        after:w-3 
        after:rounded-full 
        after:border-none
        after:bg-neutral-100 
        after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
        after:transition-[background-color_0.2s,transform_0.2s] 
        after:content-['']

        checked:bg-primary 
        checked:after:absolute 
        checked:after:z-[2] 
        checked:after:mt-[0.05rem] 
        checked:after:ml-[1.3rem] 
        checked:after:h-3 
        checked:after:w-3 
        checked:after:rounded-full 
        checked:after:border-none 
        checked:after:bg-primary 
        checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
        checked:after:transition-[background-color_0.2s,transform_0.2s] 
        checked:after:content-[''] 
        hover:cursor-pointer 
        focus:outline-none 
        focus:ring-0 
        focus:before:scale-100 
        focus:before:opacity-[0.12] 
        focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
        focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
        focus:after:absolute focus:after:z-[1]
        focus:after:content-[''] 
        checked:focus:border-primary 
        checked:focus:bg-primary 
        checked:focus:before:ml-[1.0625rem] 
        checked:focus:before:scale-100 
        checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        defaultChecked={currentTheme === 'light' ? true : false}
        onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
}
