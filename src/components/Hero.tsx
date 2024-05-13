import { motion } from 'framer-motion'
const Hero = () => {


     return (
          <section className='w-full h-full relative'>
               <div className='flex h-[100vh] w-full justify-center align-middle flex-col text-center'>
                    <motion.h1
                         variants={{
                              hidden: { opacity: 0, y: 30 },
                              show: { opacity: 1, y: 0 }
                         }
                         }
                         initial="hidden"
                         animate="show"
                         transition={{
                              delay: 0.25,
                              duration: 0.5,
                         }}
                         id="main-title"
                         className="text-white text-[150px] md:text-[100px] font-black font-title" >Hey,I'm Brian<span className='text-blue-500'>.</span></motion.h1>
                    <motion.h2
                         variants={{
                              hidden: { opacity: 0, y: 30 },
                              show: { opacity: 1, y: 0 }
                         }
                         }
                         initial="hidden"
                         animate="show"
                         transition={{
                              delay: 0.75,
                              duration: 0.5,
                         }}
                         id="main-title"
                         className="text-white text-xl font-black font-title" >I'm a <span className='text-blue-500'>Full-Stack Developer.</span></motion.h2>
               </div>
          </section >
     )
}

export default Hero
