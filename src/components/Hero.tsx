import { motion } from 'framer-motion';
import gojo from '../assets/gojo.png';

const Hero = () => {
     return (
          <section className='z-20 flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center'>
               <div className='flex flex-col justify-center items-left text-center lg:text-left'>
                    <motion.h1
                         variants={{
                              hidden: { opacity: 0, y: 30 },
                              show: { opacity: 1, y: 0 }
                         }}
                         initial="hidden"
                         animate="show"
                         transition={{
                              delay: 0.25,
                              duration: 0.5,
                         }}
                         id="main-title"
                         className="text-white text-4xl lg:text-6xl font-black font-title" >
                         Hey, I'm Brian<span className='text-blue-500'>.</span>
                    </motion.h1>
                    <motion.h2
                         variants={{
                              hidden: { opacity: 0, y: 30 },
                              show: { opacity: 1, y: 0 }
                         }}
                         initial="hidden"
                         animate="show"
                         transition={{
                              delay: 0.75,
                              duration: 0.5,
                         }}
                         id="sub-title"
                         className="text-white text-lg lg:text-xl font-semibold font-title mt-4" >
                         I'm a <span className='text-blue-500'>Full-Stack Developer.</span>
                    </motion.h2>
               </div>
               <div className='flex justify-center items-center lg:ml-10 mt-10 lg:mt-0'>
                    <motion.img variants={{
                         hidden: { opacity: 0, x: 30 },
                         show: { opacity: 1, x: 0 }
                    }}
                         initial="hidden"
                         animate="show"
                         transition={{
                              delay: 0.75,
                              duration: 0.5,
                         }} src={gojo} alt="" className='max-w-xs lg:max-w-none' />
               </div>
          </section >
     )
}

export default Hero;
