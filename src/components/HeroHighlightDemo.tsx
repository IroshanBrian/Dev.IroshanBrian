"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import me from '../assets/me.webp';

export function HeroHighlightDemo() {


     return (
          <HeroHighlight className="flex flex-col gap-10">
               <motion.h1
                    initial={{
                         opacity: 0,
                         y: 20,
                    }}
                    animate={{
                         opacity: 1,
                         y: [20, -5, 0],
                    }}
                    transition={{
                         duration: 0.5,
                         ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-4xl px-4 font-title font-black md:text-4xl lg:text-5xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
               >
                    Hey, I'm Brian<span className="text-cyan-500 text-5xl">.</span><br />{" "}
                    <Highlight className="text-3xl font-semibold">
                         Full-Stack Developer
                    </Highlight>
               </motion.h1>
               <motion.div>
                    <div className="bg-white lg:w-[400px] sm:w-[350px] h-[200px] rounded-full flex justify-center overflow-hidden">
                         <img src={me} alt="Iroshan Brian" width={200} className="absolute lg:bottom-[0rem] md:bottom-[0rem] bottom-[0rem]" />
                    </div>
               </motion.div>
               {/* <motion.div>
                    <div className="bg-white lg:w-[200px] sm:w-[350px] h-[40px] rounded-full overflow-hidden text-center">
                         <h3>Time: {timeData ? timeData.time : "Loading..."}</h3>
                    </div>
               </motion.div> */}
          </HeroHighlight>
     );
}
