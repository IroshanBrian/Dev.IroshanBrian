import Header from './components/Header';
import Tech from './components/Tech';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Suspense, lazy } from 'react';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';

const App = () => {
  return (
    <>
      <lazy> <Header /> </lazy>

      <main className='bg-black'>
        <HeroHighlightDemo />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </lazy >
  )
}

export default App
