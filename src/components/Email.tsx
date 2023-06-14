import Link from 'next/link'
import React from 'react'
import {FiMail} from 'react-icons/fi'
import {motion} from 'framer-motion'
function Email() {
  return (
    <motion.div 
    initial={{opacity:0, y:-25}}
                animate={{opacity:1, y:0}}
                transition={{
                duration:0.3,
                ease:"easeInOut",
                delay: 1.95,
                }}
    className='email'>
        <Link href='mailto:gaova777@utp.edu.co' className='email-link'><FiMail/></Link>
    </motion.div>
  )
}

export default Email