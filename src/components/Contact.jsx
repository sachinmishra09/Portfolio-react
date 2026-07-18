import React from 'react'
import { CONTACT } from '../constants'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FaSquareXTwitter } from 'react-icons/fa6'
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

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>
        Contact
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='my-4'>
            {CONTACT.address}
        </motion.p >
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className='my-4'>
            {CONTACT.phoneNo}
        </motion.p>
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
        >
        <a href='https://mail.google.com/' 
        // className='border-b'
        >
            {CONTACT.email}
        </a>
        </motion.div>
            </div>
        <div className="m-8 flex items-center justify-center gap-6 text-3xl">
            <motion.a
            variants={iconVariants(2.1)}
            initial="initial"
            animate="animate"
            href="https://www.linkedin.com/in/sachinmshr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-blue-400"
            >
            <FaLinkedin />
            </motion.a>

            <motion.a
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate"
            href="https://github.com/sachinmishra09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
            <FaGithub />
            </motion.a>

            <motion.a
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
            href="https://leetcode.com/u/sachinmshr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
            className="text-yellow-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-yellow-300"
            >
            <SiLeetcode />
            </motion.a>

            <motion.a
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate"
            href="https://x.com/SachinMishra74"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X profile"
            className="text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
            <FaSquareXTwitter />
            </motion.a>
        </div>
    </div>
  )
}

export default Contact
