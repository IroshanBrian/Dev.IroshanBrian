"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import me from '../assets/me.png'

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
                    className="text-4xl px-4 font-pop font-black md:text-4xl lg:text-5xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
               >
                    Hey, I'm Brian.<br />{" "}
                    <Highlight className="text-3xl font-semibold">
                         Full-Stack Developer.
                    </Highlight>
               </motion.h1>
               <motion.div>
                    <div className="bg-white lg:w-[400px] sm:w-[350px] h-[200px] rounded-full overflow-hidden">
                         <img src={me} alt="" width={400} className="relative lg:bottom-[8rem] md:bottom-[8rem] bottom-[9rem]" />
                    </div>
               </motion.div>
          </HeroHighlight>
     );
}
