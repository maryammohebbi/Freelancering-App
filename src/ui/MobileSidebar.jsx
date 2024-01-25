import React from 'react'
import SideMenu from './SideMenu'
import { HiX } from 'react-icons/hi'

function MobileSidebar({menuOpen, setMenuOpen}) {
   
  return (
    <div className={`${menuOpen ? "flex" : "hidden"} bg-secondary-0 absolute w-[15rem] h-screen top-0 p-6 flex-col border-l border-gray-300 rounded-tl-3xl`}>
        <div className='flex justify-end'>
            <button
                onClick={()=> setMenuOpen(false)} 
                className='mb-6 size-6 text-secondary-800'
            >
                <HiX className='size-full'/>
            </button>
        </div>
        <SideMenu/>
    </div>
  )
}

export default MobileSidebar