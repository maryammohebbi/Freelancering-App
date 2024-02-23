import React from 'react'
import DarkModeToggle from '../../ui/DarkModeToggle'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi'
import UserAvatar from '../authentication/UserAvatar'
import LogOut from '../authentication/LogOut'

function HomeMenu({user}) {
  return (
    <ul className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 items-center'>
                    
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
  )
}

export default HomeMenu