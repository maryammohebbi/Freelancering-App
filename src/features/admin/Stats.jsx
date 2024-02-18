import React from 'react'
import Stat from '../../ui/Stat'
import { HiCollection, HiUser } from 'react-icons/hi'
import { IoIosPaper } from 'react-icons/io'
import { BiSolidCategoryAlt } from 'react-icons/bi'

function Stats({projects, proposals, users, categories}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
        <Stat
            title="پروژه ها"
            value={projects}
            color="green"
            icon={<HiCollection className='size-20'/>}
        />
        <Stat
            title="پروپوزال ها"
            value={proposals}
            color="yellow"
            icon={<IoIosPaper className='size-20'/>}
        />
        <Stat
            title="کاربران"
            value={users}
            color="primary"
            icon={<HiUser className='size-20'/>}
        />
        <Stat
            title="دسته بندی ها"
            value={categories}
            color="pink"
            icon={<BiSolidCategoryAlt className='size-20'/>}
        />
    </div>
  )
}

export default Stats