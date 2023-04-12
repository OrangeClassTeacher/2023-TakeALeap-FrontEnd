import React from 'react'

import { NavbarCustom } from './NavbarCustom'

function Header() {
  return (
    <header className='sticky top-o w-full shadow-md z-[100] bg-black'>
      <NavbarCustom/>
      <div className='flex justify-between items-center w-full h-full px-4 2x1:px-16 py-1 text-5xl font-light'>
        LYNX
      </div>
      <p className='px-6 2x1:px-16 py-0 text-xs underline'>Find, Eat, Rate</p>
      <div>
        
      </div>
    </header>
  )
}

export default Header