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
                        Bonjour! My name is Kishan, and I am passionate about creating
                        digital content for the web. My interest in web development was
                        sparked in 2016 when I created my first project called Lavish, a
                        social media app built using React and Node.js.
                    </p>
                    <p className="about-grid-info-text">
                        Fast-forward to today, I specialize in designing and developing
                        high-quality solutions that delight our clients and exceed their
                        expectations at{" "}
                        <Link href="https://rapidops.com" className="link" target="_blank">
                            Rapidops.
                        </Link>
                    </p>

                    <p className="about-grid-info-text">
                        Additionally, I share my knowledge and passion with the world
                        through my YouTube channel, where I demonstrate how to build
                        full-stack applications.
                    </p>
                    <p className="about-grid-info-text">
                        I am also working on a new project called&nbsp;
                        <Link
                            className="link"
                            target="_blank"
                            href="https://frontendvita.com"
                        >
                            FrontendVita,
                        </Link>
                        &nbsp;aimed at enhancing frontend development skills.
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

           <Skills/>


        </motion.div>
    )
}

export default About