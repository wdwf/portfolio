// import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { ThemeProvider } from './context/ThemeContext';
import { Ability } from './sections/Ability';
import { About } from './sections/About';
import { Follow } from './sections/Follow';
import { Main } from './sections/Main';
// import { Methods } from './sections/Methods';
import { Projects } from './sections/Projects';

function App() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center bg-zinc-900 text-zinc-50 flex-col relative">
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
      </div>
    </ThemeProvider>
  );
}

export default App;
