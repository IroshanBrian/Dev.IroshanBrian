import Header from './components/Header';
import Tech from './components/Tech';
import About from './components/About';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-black'>
        <HeroHighlightDemo />
        <About />
        <Tech />
      </main>
    </>
  )
}

export default App
