import { motion } from 'framer-motion';
import grid1 from '../assets/grid/grid1.webp';
import grid2 from '../assets/grid/grid2.webp';
import grid3 from '../assets/grid/grid3.webp';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { Helmet } from 'react-helmet-async';

const About = () => {
     const people = [
          {
               id: 1,
               name: "Instagram",
               designation: "@iroshanbrian",
               image:
                    "https://img.icons8.com/?size=100&id=32323&format=png&color=000000",
               link: "https://www.instagram.com/iroshanbrian"
          },
          {
               id: 2,
               name: "Facebook",
               designation: "Iroshan Brian Bandaragoda",
               image:
                    "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
               link: "https://facebook.com/iroshanbrian/"
          },
          {
               id: 3,
               name: "Github",
               designation: "/iroshanbrian",
               image:
                    "https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000",
               link: "https://github.com/iroshanBrian/"
          },
          {
               id: 4,
               name: "LinkedIn",
               designation: "/iroshan-brian-bandaragoda",
               image:
                    "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
               link: "https://www.linkedin.com/in/iroshan-brian-bandaragoda-42b8b02bb"
          },
          {
               id: 5,
               name: "WhatsApp",
               designation: "+94 71 461 4875",
               image:
                    "https://img.icons8.com/?size=100&id=16713&format=png&color=000000",
               link: "https://wa.me/714614875"
          },
     ];
     return (
          <>
               <Helmet>
                    <title>About | Iroshan Brian</title>
                    <meta name="description" content="About Brian's journey of programming and socials" />
                    <link rel="canonical" href="#about" />
               </Helmet>
               <section id="about" className="h-max py-12">
                    <div className="max-w-6xl mx-auto px-4">
                         <motion.div
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="mb-8"
                         >
                              <h2 className="text-white text-4xl font-extrabold border-b-2 border-cyan-500 pb-2">About Me<span className="text-cyan-200 text-5xl">.</span></h2>
                         </motion.div>
                         <div className="m-5 flex flex-wrap lg:flex-nowrap font-title space-y-8 lg:space-y-0 lg:space-x-8">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.2 }}
                                   className="text-white lg:w-1/2"
                              >
                                   <div>
                                        <h2 className="text-2xl font-semibold">Introduction</h2>
                                        <svg className='w-[150px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 125" fill="#00FDFF"><path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path></svg>
                                   </div>
                                   <p className="leading-relaxed text-lg mt-5">I am a self-taught professional full stack developer with 3+ years of experience in website development. I specialize in developing and maintaining web applications using a variety of programming languages and Frameworks Such as JavaScript, Php, Laravel, ExpressJs and many more.</p>
                                   <div className='ml-5 mt-10'>
                                        <div className="flex">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                             </svg>
                                             <span className="ml-2 font-title text-xl">Pearson HND in Computing (2023 - 2025)</span>
                                        </div>
                                        <div className="flex mb-5">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                             </svg>
                                             <span className="ml-2 font-title text-xl">BSc. CompSci (2025)</span>
                                        </div>
                                   </div>
                                   <div className="mt-10">
                                        <div className="mt-[2rem]">
                                             <div className="flex flex-col">
                                                  <h3 className="h7">For Inquiries:</h3>
                                                  <div className="flex">
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                                       </svg>
                                                       <span className="ml-2 text-center">dev.iroshanbrian@gmail.com</span>
                                                  </div>
                                             </div>
                                             <div className="flex align-left gap-5 mt-5">
                                                  <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
                                                       <AnimatedTooltip items={people} />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.4 }}
                                   className="lg:w-1/2 grid grid-cols-2 gap-4"
                              >
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="col-span-1"
                                   >
                                        <img src={grid1} alt="Description 1" className="w-full h-auto rounded-lg shadow-lg" />
                                   </motion.div>
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1 }}
                                        className="col-span-1 overflow-hidden rounded-lg "
                                   >
                                        <img src={grid2} alt="Description 2" className="w-full h-auto rounded-lg shadow-lg scale-[1.2]" />
                                   </motion.div>
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.5 }}
                                        className="col-span-2"
                                   >
                                        <img src={grid3} alt="Description 3" className="w-full h-auto rounded-lg shadow-lg" />
                                   </motion.div>
                              </motion.div>
                         </div>
                    </div>
               </section>
          </>
     );
}

export default About;
