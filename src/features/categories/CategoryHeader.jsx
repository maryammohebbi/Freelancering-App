import React from 'react'
import { FaPlus } from 'react-icons/fa6'

function CategoryHeader() {
  return (
    <div className='flex justify-between mb-8'>
        <h1 className='font-black text-secondary-700 text-xl'>لیست دسته بندی ها</h1>
        <button 
            className='btn btn--primary flex items-center gap-x-2'>
                <FaPlus className='size-4'/>
                <span>اضافه کردن دسته بندی جدید</span>
        </button>
        
    </div>
  )
}

export default CategoryHeader