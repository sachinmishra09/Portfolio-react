// Education.jsx

import React from "react";
import { EXPERIENCES } from "../constants";
import { animate, delay, motion } from "framer-motion"

function Education() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-12 text-center text-3xl text-white sm:my-16 sm:text-4xl lg:my-20">
        Education
      </motion.h1>

      <div className="px-4 sm:px-8 lg:px-0">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap lg:mb-8 lg:justify-center"
          >
            {/* Education year */}
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Education details */}
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>

              <p>{experience.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;