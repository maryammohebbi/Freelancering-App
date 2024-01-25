import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayout() {
  return (
    <div className='grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] h-screen'>
        <Header/>
        <Sidebar/>
        <div className='bg-yellow-200'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AppLayout