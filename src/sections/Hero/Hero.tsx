import Button from '@/components/Button'
import {motion} from 'framer-motion'
import React from 'react'

function Hero() {
  return (
    <div className="hero">
        <motion.h1  
        className="hero-title"
    initial={{opacity:0, y:-25}}
                animate={{opacity:1, y:0}}
                transition={{
                duration:0.3,
                ease:"easeInOut",
                delay: 0.6,
                }}
        >
            Hi!, My Name is
        </motion.h1>
        <motion.h2 
        className="hero-title-large"
        initial={{opacity:0, y:-25}}
                animate={{opacity:1, y:0}}
                transition={{
                duration:0.3,
                ease:"easeInOut",
                delay: 0.75,
                }}
        >
            Juan Diego 
        </motion.h2>
        <motion.h3 
        className="hero-title-large hero-title-sub"
        initial={{opacity:0, y:-25}}
                animate={{opacity:1, y:0}}
                transition={{
                duration:0.3,
                ease:"easeInOut",
                delay: 1.05,
                }}
        >
            I craft things for web
        </motion.h3>
        <motion.p 
        className="hero-text"
        initial={{opacity:0, y:-25}}
                animate={{opacity:1, y:0}}
                transition={{
                duration:0.3,
                ease:"easeInOut",
                delay: 1.35,
                }}
        >
            I&apos;m Physics engineer with software developing background with expertise in creating digital experinces. My curren focus is on developing products that are accessible and centered around users need.
        </motion.p>
        
    </div>
  )
}

export default Hero