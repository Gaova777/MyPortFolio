import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import Hero from '@/sections/Hero/Hero'
import NavBar from '@/sections/NavBar/NavBar'
import React from 'react'

function Index() {
  return (
    <div className='app'>
      <NavBar />
      <SocialIcons/>
      <Email/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default Index