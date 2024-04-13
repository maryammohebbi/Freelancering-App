import React, { useState } from 'react'
import useUser from '../authentication/useUser'
import { HiMenuAlt3 } from 'react-icons/hi'
import HomeMenu from './HomeMenu'
import MobileSidebar from '../../ui/MobileSidebar'

function HomeHeader() {
    const {isLoading, user} = useUser()
    const [open, setOpen] = useState(false)
  return (
    <div>
        <div className='py-4 px-8 border-b border-secondary-200'>
            <div className='container max-w-screen-lg flex justify-between'>
                <div>
                    <button
                        onClick={()=>setOpen(true)} 
                        className='lg:hidden size-7'
                    >                   
                        <HiMenuAlt3 className='size-full text-secondary-900'/>
                    </button>
                </div>
                <div className={`hidden lg:flex items-center gap-x-8 ${isLoading && "blur-sm opacity-50"}`}>
                    <HomeMenu user={user}/>
                </div> 
            </div>  
        </div>
        <MobileSidebar onClose={()=>setOpen(false)} open={open}>
            <HomeMenu user={user}/>
        </MobileSidebar>  
    </div>
  )
}

export default HomeHeader