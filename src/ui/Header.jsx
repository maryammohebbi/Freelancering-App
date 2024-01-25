import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

function Header({setMenuOpen}) {
  return (
    <div className='bg-green-200 col-span-2 md:col-span-1 p-4'>
        <div className='flex items-center gap-x-2'>
            <button
                onClick={()=> setMenuOpen(true)} 
                className='md:hidden size-7'>
                <HiMenuAlt3 className='size-full'/>
            </button>
            <div>
                Header
            </div>
        </div>
    </div>
  )
}

export default Header