import Button from '@/components/Button'
import Logo from '@/components/Logot'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  const sectionLinks = [
      {name: "About",link:"/#about"},
      {name: "Experience",link:"/#experience"},
      {name: "Work",link:"/#work"},
      {name: "Contact",link:"/#contact"},
  ]
  return (
    <nav>
      <div className='wrapper'>
        <div className="brand">
          <Link href="https://Github.com/Gaova777" target='_blank'>
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {
              sectionLinks.map(({name,link})=>(
                <li key={name} className='nav-items-list-item'>
                  <Link href={link} className='nav-items-list-link'>. {name}</Link>
                </li>
              ))
            }
          </ul>
          <div className="nav-items-button">
            <Button text="Resume" link="http://localhost:3000/resume.pdf"/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar