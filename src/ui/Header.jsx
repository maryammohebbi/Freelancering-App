import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import UserAvatar from '../features/authentication/UserAvatar'
import HeaderMenu from './HeaderMenu'
import useUser from '../features/authentication/useUser'

function Header({onOpen}) {
  const {isLoading} = useUser()
  return (
    <div className='bg-secondary-0 py-4 px-8 border-b border-secondary-200 col-span-2 lg:col-span-1'>
        <div className='container max-w-screen-lg flex justify-between'>
            <div>
              <button
                  onClick={onOpen} 
                  className='lg:hidden size-7'>
                  <HiMenuAlt3 className='size-full text-secondary-900'/>
              </button>
            </div>
            <div className={`flex items-center gap-x-8 ${isLoading && "blur-sm opacity-50"}`}>
              <UserAvatar/>
              <HeaderMenu/>
            </div>
        </div>
    </div>
  )
}

export default Header