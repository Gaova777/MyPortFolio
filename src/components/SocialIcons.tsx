import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import {FiGithub,FiLinkedin} from 'react-icons/fi'

function SocialIcons() {
    const socialicons = [
        {name:"Github", icon: <FiGithub/>, link:"https://www.github.com/Gaova777"},
        {name:"LindeIn", icon: <FiLinkedin/>, link:"https://www.linkedin.com/in/juan-diego-garzon-ovalle-82006a188"},

    ]
  return (
    <motion.div 
    className='social-icons'
    initial={{opacity:0, y:-25}}
                animate={{opacity:1, y:0}}
                transition={{
                duration:0.3,
                ease:"easeInOut",
                delay: 1.95,
                }}
    >
        <ul className='social-icons-list'>
            {
                socialicons.map(({name, icon, link})=>(
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank'>{icon}</Link>
                    </li>
                ))
            }
        </ul>
    </motion.div>
  )
}

export default SocialIcons