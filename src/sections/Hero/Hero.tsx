import Button from '@/components/Button'
import React from 'react'

function Hero() {
  return (
    <div className="hero">
        <h1  className="hero-title">
            Hi!, My Name is
        </h1>
        <h2 className="hero-title-large">
            Juan Diego 
        </h2>
        <h3 className="hero-title-large hero-title-sub">
            I craft things for web
        </h3>
        <p className="hero-text">
            I&apos;m Physics engineer with software developing background with expertise in creating digital experinces. My curren focus is on developing products that are accessible and centered around users need.
        </p>
        <div className="hero-button">
            <Button text="Check out my course" link='https://youtube.com'/>
        </div>
    </div>
  )
}

export default Hero