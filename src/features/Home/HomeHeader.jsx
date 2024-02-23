import React from 'react'
import UserAvatar from '../authentication/UserAvatar'
import useUser from '../authentication/useUser'
import { HiMenuAlt3, HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../../ui/DarkModeToggle'
import LogOut from '../authentication/LogOut'
import { Tooltip } from '@mui/material'

function HomeHeader() {
    const {isLoading, user} = useUser()
  return (
    <div className='bg-secondary-0 py-4 px-8 border-b border-secondary-200 col-span-2 lg:col-span-1'>
        <div className='container max-w-screen-lg flex justify-between'>
            <div>
              <button
                //   onClick={onOpen} 
                  className='lg:hidden size-7'
                >
                    
                  <HiMenuAlt3 className='size-full text-secondary-900'/>
              </button>
            </div>
            <div className={`flex items-center gap-x-8 ${isLoading && "blur-sm opacity-50"}`}>
              
              <ul className='flex gap-x-4 items-center'>
                    
                    <li className='flex'>
                        <DarkModeToggle/>
                    </li>
                    {
                        user ? (
                            <>
                                <li className='flex'>
                                    <Tooltip title="داشبورد" arrow>
                                        <Link to={`${user.role === "ADMIN" ? "/admin" : user.role === "OWNER" ? "/owner" : "/freelancer"} `}>
                                            <HiOutlineUser className='size-5 text-primary-900'/>
                                        </Link>
                                    </Tooltip>
                                </li>
                                <li>
                                    <UserAvatar/>
                                </li>
                                <li className='flex'>
                                    <LogOut/>
                                </li>
                            </>
                        ) : (
                            <Link to="/auth" className='text-secondary-800' >ورود | ثبت نام</Link>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader