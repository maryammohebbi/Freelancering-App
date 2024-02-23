import React from 'react'
import { HiHome, HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import LogOut from '../features/authentication/LogOut'
import { Tooltip } from '@mui/material'

function HeaderMenu() {
  return (
    <ul className='flex gap-x-4 items-center'>
        <li className='flex'>
            <Tooltip title="داشبورد" arrow>
                <Link to="dashboard">
                    <HiOutlineUser className='size-5 text-primary-900'/>
                </Link>
            </Tooltip>
            
        </li>
        <li className='flex'>
            <DarkModeToggle/>
        </li>
        <li className='flex'>
            <Link to="/">
                <HiHome className='size-5 text-primary-900'/>
            </Link>
        </li>
        <li className='flex'>
            <LogOut/>
        </li>
    </ul>
  )
}

export default HeaderMenu