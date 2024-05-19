import Header from './components/Header';
import About from './components/About';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-black'>
        <HeroHighlightDemo />
        <About />
      </main>
    </>
  )
}

export default App
