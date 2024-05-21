"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import me from '../assets/me.webp';
import { useEffect, useState } from "react";
import axios from "axios";

interface TimeResponse {
     year: number;
     month: number;
     day: number;
     hour: number;
     minute: number;
     seconds: number;
     milliSeconds: number;
     dateTime: string;
     date: string;
     time: string;
     timeZone: string;
     dayOfWeek: string;
     dstActive: boolean;
}

export function HeroHighlightDemo() {
     const [timeData, setTimeData] = useState<TimeResponse | null>(null);

     useEffect(() => {
          const fetchTime = async () => {
               try {
                    const response = await axios.get<TimeResponse>('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata');
                    console.log(response)
               } catch (err) {
                    console.log(err);
               }
          };

          fetchTime();
     }, []);

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
                    <div className="bg-white lg:w-[400px] sm:w-[350px] h-[200px] rounded-full overflow-hidden">
                         <img src={me} alt="" width={400} className="relative lg:bottom-[8rem] md:bottom-[8rem] bottom-[9rem]" />
                    </div>
               </motion.div>
               <motion.div>
                    <div className="bg-white lg:w-[200px] sm:w-[350px] h-[40px] rounded-full overflow-hidden text-center">
                         <h3>Time: {timeData ? timeData.time : "Loading..."}</h3>
                    </div>
               </motion.div>
          </HeroHighlight>
     );
}
