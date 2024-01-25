import React from 'react'
import SideMenu from './SideMenu'

function Sidebar() {
  return (
    <div className='hidden md:block row-span-2 row-start-1 bg-secondary-0 border-l border-gray-300 p-4'>
        <SideMenu/>
    </div>
  )
}

export default Sidebar