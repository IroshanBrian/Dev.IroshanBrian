import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Hero = () => {

     useGSAP(() => {
          gsap.to('#main-title', {
               y: 500,
               opacity: 0,
               duration: 1,
          })
     }, [])

     return (
          <section className='w-full h-full relative'>
               <div className='h-5/6 w-full flex-center flex-col'>
                    <h1 id="main-title">I'm Iroshan Brian</h1>
               </div>
          </section>
     )
}

export default Hero
