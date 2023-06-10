import Link from 'next/link'
import React from 'react'
import {FiGithub,FiLinkedin} from 'react-icons/fi'

function SocialIcons() {
    const socialicons = [
        {name:"Github", icon: <FiGithub/>, link:"https://www.github.com/Gaova777"},
        {name:"LindeIn", icon: <FiLinkedin/>, link:"https://www.linkedin.com/in/juan-diego-garzon-ovalle-82006a188"},

    ]
  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {
                socialicons.map(({name, icon, link})=>(
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank'>{icon}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialIcons