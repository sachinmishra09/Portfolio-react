// Projects.jsx

import React from "react";
import { PROJECTS } from "../constants";
import { animate, delay, motion } from "framer-motion"

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-12 text-center text-3xl text-white sm:my-16 sm:text-4xl lg:my-20">
        Projects
      </motion.h1>

      <div className="w-full px-4 sm:px-6 lg:px-0">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex w-full min-w-0 flex-col lg:mb-8 lg:flex-row lg:flex-wrap lg:justify-center"
          >
            {/* Project image */}
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-full min-w-0 lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 h-auto w-full max-w-full rounded object-cover lg:h-40 lg:w-90"
              />
            </motion.div>

            {/* Project details */}
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="w-full min-w-0 max-w-xl lg:w-3/4">
              <h6 className="mb-2 break-words font-semibold">
                {project.title}
              </h6>

              <p className="mb-4 break-words text-neutral-400">
                {project.description}
              </p>

              {/* Technology tags */}
              <div className="flex max-w-full flex-wrap gap-x-2 gap-y-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project buttons */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  GitHub
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-purple-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                >
                  Live Demo
                </a>
              </div>
            </motion.div >
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


/*
import React from 'react'
import { PROJECTS } from '../constants'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl text-white'>Projects</h1>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                <img 
                src={project.image} 
                alt={project.title}
                className='h-50 w-90 mb-6 rounded'
                />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{project.title} </h6>
                <p className='mb-4 text-neutral-400'>{project.description} </p>
                {project.technologies.map((tech,index) => (
                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech} </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects
*/