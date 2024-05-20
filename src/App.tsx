import Header from './components/Header';
import Tech from './components/Tech';
import About from './components/About';
import Projects from './components/Projects';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-black'>
        <HeroHighlightDemo />
        <About />
        <Tech />
        <Projects />
      </main>
    </>
  )
}

export default App
