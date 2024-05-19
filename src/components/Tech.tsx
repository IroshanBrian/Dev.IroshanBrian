"use client";
import { motion } from "framer-motion";
import react from '../assets/techstack/React.webp';
import node from '../assets/techstack/node.png';
import ex from '../assets/techstack/ex.png';
import laravel from '../assets/techstack/laravel.png';
import mongodb from '../assets/techstack/mongodb.png';
import SkillsCard from './ui/SkillsCard';

const Tech = () => {
     return (
          <section className="h-max py-12">
               <div className="max-w-6xl mx-auto px-4 py-10">
                    <motion.div
                         initial={{ opacity: 0, y: -50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5 }}
                         className="mb-8"
                    >
                         <h1 id="about" className="text-white text-4xl font-extrabold border-b-2 border-cyan-500 pb-2">Skills<span className="text-cyan-200 text-5xl">.</span></h1>
                    </motion.div>
               </div>
               <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 max-w-6xl mx-auto px-10">
                    <SkillsCard imgSrc={react} label={"React"} />
                    <SkillsCard imgSrc={node} label={"NodeJs"} />
                    <SkillsCard imgSrc={ex} label={"ExpressJs"} />
                    <SkillsCard imgSrc={mongodb} label={"MongoDB"} />
                    <SkillsCard imgSrc={laravel} label={"Laravel"} />
               </div>
          </section >
     )
}

export default Tech
