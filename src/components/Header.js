import Link from 'next/link'
import React from 'react'

import About from './About'
import Contact from './Contact'
import HomePage from './HomePage'

function Header() {
  return (
    <div>
      <nav className='bg-gray-300 '>
        <ul className='flex  justify-center '>
        <li className='mx-6'>
            
            </li>
            <li className='mx-6'>
                <HomePage/>
            </li>
            <li className='mx-6'>
           <About/>
            </li>
            <li className='mx-6'>
           <Contact/>
            </li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Header
