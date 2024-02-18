import React from 'react'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiCollection, HiHome, HiUser } from 'react-icons/hi'
import { IoIosPaper } from 'react-icons/io'
import { BiSolidCategoryAlt } from "react-icons/bi"

function AdminSideMenu() {
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
        <CustomNavLink to="categories">
            <BiSolidCategoryAlt/>
            <span> دسته بندی ها</span>
        </CustomNavLink>
        <CustomNavLink to="users">
            <HiUser/>
            <span>کاربران</span>
        </CustomNavLink>
    </ul>
  )
}

export default AdminSideMenu