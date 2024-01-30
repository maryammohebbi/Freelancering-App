import React from 'react'
import SideMenu from '../features/owner/OwnerSideMenu'

function Sidebar({children}) {
  return (
    <div className='hidden lg:block row-span-2 row-start-1 bg-secondary-0 border-l border-gray-300 p-4'>
        {/* <SideMenu/> */}
        {children}
    </div>
  )
}

export default Sidebar