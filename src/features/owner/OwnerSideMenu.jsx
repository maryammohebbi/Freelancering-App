import React from 'react'
import { HiCollection, HiHome } from 'react-icons/hi'
import CustomNavLink from '../../ui/CustomNavLink'

function OwnerSideMenu() {
  return (
    <ul className='flex flex-col gap-y-4'>
        <CustomNavLink to="/owner/dashboard">
            <HiHome/>
            <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
            <HiCollection/>
            <span>پروژه ها</span>
        </CustomNavLink>
    </ul>
  )
}

export default OwnerSideMenu
