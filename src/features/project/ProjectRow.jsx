import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber'
import { CiEdit, CiTrash } from "react-icons/ci"
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import useRemoveProject from './useRemoveProject'
import CreateProjectForm from './CreateProjectForm'
import ToggleProjectStatus from './ToggleProjectStatus'
import { Link } from 'react-router-dom'
import { HiEye } from 'react-icons/hi'
import { Tooltip } from '@mui/material'

function ProjectRow({index, project}) {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const {removeProject, isDeleting} = useRemoveProject()

  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{truncateText(project.title, 30)}</td>
        <td>{project.category.title}</td>
        <td>{toPersianNumbersWithComma(project.budget)}</td>
        <td>{toLocalDateShort(project.deadline)}</td>
        <td>
            <div className='flex flex-wrap max-w-[200px] items-center gap-2'>
                {project.tags.map((tag)=> (
                    <span key={tag} className='badge badge--secondary'>{tag}</span>
                ))}
            </div>
        </td>
        <td>{project.freelancer?.name || "ندارد"}</td>
        <td> 
            <ToggleProjectStatus project={project}/>

            {/* {project.status === "OPEN" ? 
                <span className='badge badge--success'>باز</span> : <span className='badge badge--danger'>بسته</span>
            } */}
        </td>
        <td>
            <div className="flex items-center gap-x-4">

                <>
                    <Tooltip title="ویرایش" arrow placement='top'>
                        <button onClick={()=> setIsEditOpen(true)}>
                            <CiEdit className='size-6 text-primary-900'/>
                        </button>
                    </Tooltip>
                    <Modal title={`ویرایش ${project.title}`} onClose={()=>setIsEditOpen(false)} open={isEditOpen}>
                        <CreateProjectForm 
                            onClose={()=> setIsEditOpen(false)} 
                            projectToEdit={project}
                        />
                    </Modal>
                </>

                <>
                    <Tooltip title="حذف" arrow placement='top'>
                        <button onClick={()=> setIsDeleteOpen(true)}>
                            <CiTrash className='size-6 text-error'/>
                        </button>
                    </Tooltip>
                    <Modal title={` حذف ${project.title}`} onClose={()=> setIsDeleteOpen(false)} open={isDeleteOpen}>
                        <ConfirmDelete 
                            resourceName={project.title} 
                            onClose={()=> setIsDeleteOpen(false)}
                            onConfirm={()=> removeProject(project._id, {
                                onSuccess: ()=> setIsDeleteOpen(false)
                            })}
                            disabled={false}
                        />
                    </Modal>
                </>

            </div>
        </td>
        <td>
            <Tooltip title="دیدن درخواست ها" arrow placement='top'>
                <Link to={project._id} className='flex justify-center'>
                    <HiEye className='size-5 text-primary-800'/>
                </Link>
            </Tooltip>
        </td>
    </Table.Row>
  )
}

export default ProjectRow