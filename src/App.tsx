import { lazy, Suspense } from 'react';
import Header from './components/Header'
const Tech = lazy(() => import('./components/Tech'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
import { HeroHighlightDemo } from './components/HeroHighlightDemo';
import AboutSkeleton from './components/skeletons/AboutSkeleton';
import ContactSkeleton from './components/skeletons/ContactSkeleton';
import ProjectsSkeleton from './components/skeletons/ProjectsSkeleton';
import TechSkeleton from './components/skeletons/TechSkeleton';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-black'>
        <HeroHighlightDemo />
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<TechSkeleton />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
    </>
  )
}

export default App
