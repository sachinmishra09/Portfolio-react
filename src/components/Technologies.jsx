import cpp from "../assets/tech/cpp.png";
import CSS3 from "../assets/tech/CSS3.png";
import Docker from '../assets/tech/Docker.png'
import Express from "../assets/tech/Express.png";
import HTML5 from "../assets/tech/HTML5.png";
import Java from "../assets/tech/Java.png";
import JavaScript from "../assets/tech/JavaScript.png";
import Matplotlib from "../assets/tech/Matplotlib.png";
import MongoDB from "../assets/tech/MongoDB.png";
import MySQL from "../assets/tech/MySQL.png";
import Node from "../assets/tech/Node.png";
import NumPy from "../assets/tech/NumPy.png";
import Pandas from "../assets/tech/Pandas.png";
import Postman from "../assets/tech/Postman.png";
import Python from "../assets/tech/Python.png";
import React from "../assets/tech/React.png";
import Tailwind from "../assets/tech/Tailwind.png";
import FastAPI from "../assets/tech/FastAPI.png";
import { animate, delay, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const icons = [
  HTML5, CSS3, JavaScript, React, Tailwind, Express,  Node, MongoDB, cpp, Java, Postman, Python, FastAPI, Matplotlib, MySQL, NumPy, Pandas, Docker
];

const Technologies = () => {
  return (
    <section id="tech">
      <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-12 text-center text-3xl sm:my-16 sm:text-4xl lg:my-20">
          Technologies
      </motion.h2>
        
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="grid grid-cols-3 gap-6 px-4 md:grid-cols-4 lg:grid-cols-8">
            {icons.map((icon, index) => (
            <motion.div
                key={index}
                variants={iconVariants(2 + index * 0.15)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-4"
            >
                <img
                src={icon}
                alt={`tech-icon-${index}`}
                width={64}
                height={64}
                />
            </motion.div>
            ))}
            </motion.div>
      </div>
    </section>
  );
};

export default Technologies;