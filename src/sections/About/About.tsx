import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {BsPatchCheckFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import Skills from './Skills'

// import JDiego from './JDiego.jpg'

function About() {
    return (
        <motion.div 
        className="about" 
        id='about'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        transition={{duration:0.6}}
        variants={{
            visible:{opacity:1,y:-50},
            hidden: {opacity:0,y:0}
        }}
        >
            <div className='title'>
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        
                        Hello!! I&apos;m Juan Diego, passionate about creating digital content for the web. My interest in web development was awakened in 2021 when I created an application ¡aguacate! 🥑 to interact in my first CRUD.
                    </p>
                    <p className="about-grid-info-text">
                    In addition, I finished my degree in Physics Engineering in December 2021, with a background in Research in software development to apply foundations in Artificial Intelligence.
                    </p>

                    <p className="about-grid-info-text">
                    Also, I love to teach my knowledge and practice with students who want to learn about programming fundamentals, software development or Artificial Intelligence.
                    </p>
                    <p className="about-grid-info-text">
                        I am also working on a new project called&nbsp;
                        <Link
                            className="link"
                            target="_blank"
                            href="https://github.com/sergioare/812"
                        >
                            812,
                        </Link>
                        &nbsp;aimed at improving frontend development skills.
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                   
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/JDiego3.jpg" alt="profile" fill />
                    </div>
                </div>
            </div>
        <div>
           <Skills/>
           </div>

        </motion.div>
    )
}

export default About