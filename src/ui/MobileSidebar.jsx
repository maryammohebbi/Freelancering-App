import React from 'react'
import SideMenu from '../features/owner/OwnerSideMenu'
import { HiX } from 'react-icons/hi'

function MobileSidebar({children, menuOpen, setMenuOpen, onClose, open}) {
   
  return (
    <div className={`${ open ? 'translate-x-0' : 'translate-x-full' } 
        bg-secondary-0 absolute w-[15rem] h-screen top-0 p-6 flex-col border-l border-gray-300 rounded-tl-3xl 
        transition-transform duration-300 transform`}
    >
        <div className='flex justify-end'>
            <button
                onClick={onClose} 
                className='mb-6 size-6 text-secondary-800'
            >
                <HiX className='size-full'/>
            </button>
        </div>
        {/* <SideMenu/> */}
        {children}
    </div>
  )
}

export default MobileSidebar