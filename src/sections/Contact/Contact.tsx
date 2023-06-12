import Button from '@/components/Button'
import React from 'react'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <h2 className='contact-title'>What&apos;s Next?</h2>
        <h2 className="contact-sub-title">Get in Touch</h2>
        <p className='contact-text'>
            If you have a Question or just want to say hi, I&apos;ll try my best to  get back to you!
        </p>
        <div className="contact-cta">
            <Button text="Say Hello" link="mailto:gaova777@utp.edu.co"/>
        </div>

    </div>
  )
}

export default Contact