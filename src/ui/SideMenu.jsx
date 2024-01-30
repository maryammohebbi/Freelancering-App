import React from 'react'
import { HiCollection, HiHome } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

function SideMenu() {
  return (
    <ul className='flex flex-col gap-y-4'>
        <li>
            <CustomNavLink to="/owner/dashboard">
                <HiHome/>
                <span>داشبورد</span>
            </CustomNavLink>
        </li>
        <li>
            <CustomNavLink to="/owner/projects">
                <HiCollection/>
                <span>پروژه ها</span>
            </CustomNavLink>
        </li>
    </ul>
  )
}

export default SideMenu

function CustomNavLink({children, to}){
    const navLinkClass = "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300"
    return(
        <NavLink 
            to={to}
            className={({isActive})=> 
                isActive 
                ? `${navLinkClass} bg-primary-100/80 text-primary-900`
                : `${navLinkClass} text-secondary-600`
            }
        >
            {children}
        </NavLink>
    )
}