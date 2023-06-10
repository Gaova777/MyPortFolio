import Link from 'next/link'
import React from 'react'
import {FiMail} from 'react-icons/fi'
function Email() {
  return (
    <div className='email'>
        <Link href='mailto:gaova777@utp.edu.co' className='email-link'><FiMail/></Link>
    </div>
  )
}

export default Email