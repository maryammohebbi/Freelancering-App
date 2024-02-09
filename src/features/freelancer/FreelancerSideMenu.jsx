import React from 'react'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'
import { IoIosPaper } from "react-icons/io"

function FreelancerSideMenu() {
  return (
    <ul className='flex flex-col gap-y-4'>
        <CustomNavLink to="dashboard">
            <HiHome/>
            <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
            <IoIosPaper/>
            <span>پروپوزال ها</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
            <HiCollection/>
            <span>پروژه ها</span>
        </CustomNavLink>
    </ul>
  )
}

export default FreelancerSideMenu