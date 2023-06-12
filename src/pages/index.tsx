import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import About from '@/sections/About/About'
import Experience from '@/sections/Experience/Experience'
import Hero from '@/sections/Hero/Hero'
import NavBar from '@/sections/NavBar/NavBar'
import Projects from '@/sections/Projects/Projects'
import React from 'react'

function Index() {
  return (
    <div className='app'>
      <NavBar />
      <SocialIcons/>
      <Email/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
      </main>
    </div>
  )
}

export default Index