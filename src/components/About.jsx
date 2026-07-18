// About.jsx

import React from "react";
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { delay, motion } from "framer-motion"

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-12 text-center text-3xl sm:my-16 sm:text-4xl lg:my-20">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        
        {/* About image */}
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="w-full px-4 sm:px-8 lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              height={500}
              width={250}
              className="rounded-2xl object-cover lg:max-w-none"
              src={aboutImg}
              alt="About Sachin Mishra"
            />
          </div>
        </motion.div>

        {/* About content */}
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
        className="w-full px-4 sm:px-8 lg:w-1/2 lg:px-0">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left whitespace-pre-line">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;