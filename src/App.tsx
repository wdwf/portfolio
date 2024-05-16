// import { Button } from './components/Button';
import { Nav } from './components/Nav';
import { Main } from './sections/Main';
import { ThemeProvider } from './context/ThemeContext';
import { About } from './sections/About';
import { Ability } from './sections/Ability';
import { Follow } from './sections/Follow';
import { Footer } from './components/Footer';
// import { Methods } from './sections/Methods';
import { Projects } from './sections/Projects';
import ButtonWhatsapp from './components/ButtonWhatsapp';

function App() {
  return (
    <ThemeProvider>
      <div className="w-full bg-zinc-300 dark:bg-zinc-900">
        <div className="max-w-7xl m-auto w-full flex items-center justify-center bg-zinc-300 text-black dark:bg-zinc-900 dark:text-zinc-50 flex-col relative">
          <Nav />
          {/* <p className='bg-sky-500'>Hello</p>
          <Button success className='w-20'>
            Sign In
          </Button>
          <Button size='sm'>Sign In</Button>
          <Button size='xs'>Sign In</Button>
          <Button>Sign In</Button> */}

          <Main />
          <About />
          <Projects />
          {/* <Methods /> */}
          <Ability />
          <Follow />
          <Footer />
          <ButtonWhatsapp />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
