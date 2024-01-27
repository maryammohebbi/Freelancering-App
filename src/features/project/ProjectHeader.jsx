import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import Modal from '../../ui/Modal'
import CreateProjectForm from './CreateProjectForm'

function ProjectHeader() {
    const [open, setOpen] = useState(false)

  return (
    <div className='flex justify-between mb-8'>
        <h1 className='font-black text-secondary-700 text-xl'>پروژه های شما</h1>
        <button 
            onClick={()=> setOpen(true)}
            className='btn btn--primary flex items-center gap-x-2'>

            <FaPlus className='size-4'/>
            <span>اضافه کردن پروژه جدید</span>
        </button>
        <Modal 
            title="اضافه کردن پروژه جدید"
            open={open} 
            onClose={()=> setOpen(false)}
        >
            <CreateProjectForm onClose={()=> setOpen(false)}/>
        </Modal>
    </div>
  )
}

export default ProjectHeader