import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function AppLayout({children, onOpen}) {
   
  return (
    <div className='grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] h-screen'>
        <Header onOpen={onOpen}/>
        {/* <Sidebar/> */}
        {children}

        <div className='bg-secondary-100 overflow-y-auto p-8 col-span-2 md:col-span-1'>
            <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
                <Outlet/>
            </div>
        </div>
        {/* <MobileSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
    </div>
  )
}

export default AppLayout