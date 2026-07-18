// Hero.jsx

import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/sachin1.jpeg";
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100,opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay},
    },
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        
        {/* Hero content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center px-4 text-center sm:px-8 lg:items-start lg:pl-20 lg:pr-0 lg:text-left">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mb-8 mt-6 text-4xl font-thin tracking-tight sm:text-5xl lg:mb-16 lg:mt-11 lg:text-8xl">
              Sachin Mishra
            </motion.h1 >

            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-center text-2xl tracking-tight text-transparent sm:text-3xl lg:text-left">
              Full Stack Web Developer
            </motion.span>

            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-2 text-center font-light tracking-tighter lg:text-left whitespace-pre-line">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Profile image */}
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1,delay:1.2}}
              className="rounded-2xl h-56 max-w-full object-contain sm:h-64 lg:h-72"
              src={profilePic}
              alt="Sachin Mishra"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;