import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import Modal from '../../ui/Modal'
import CreateCategory from './CreateCategory'

function CategoryHeader() {
    const [openCreateCat, setOpenCreateCat] = useState(false)
  return (
    <div className='flex justify-between mb-8'>
        <h1 className='font-black text-secondary-700 text-xl'>لیست دسته بندی ها</h1>
        <button 
            onClick={()=> setOpenCreateCat(true)}
            className='btn btn--primary flex items-center gap-x-2'
        >
                <FaPlus className='size-4'/>
                <span>اضافه کردن دسته بندی جدید</span>
        </button>
        <Modal title="اضافه کردن دسته بندی جدید" open={openCreateCat} onClose={()=> setOpenCreateCat(false)}>
            <CreateCategory onClose={()=> setOpenCreateCat(false)}/>
        </Modal>
        
    </div>
  )
}

export default CategoryHeader