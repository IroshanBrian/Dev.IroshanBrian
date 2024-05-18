import Header from './components/Header';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-black'>
        <HeroHighlightDemo />
      </main>
    </>
  )
}

export default App
