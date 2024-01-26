import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber'
import { CiEdit, CiTrash } from "react-icons/ci"
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import useRemoveProject from './useRemoveProject'

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
        <td> {project.status === "OPEN" ? 
            <span className='badge badge--success'>باز</span> : <span className='badge badge--danger'>بسته</span>}
        </td>
        <td>
            <div className="flex items-center gap-x-4">

                <>
                    <button onClick={()=> setIsEditOpen(true)}>
                        <CiEdit className='size-6 text-primary-900'/>
                    </button>
                    <Modal title={`ویرایش ${project.title}`} onClose={()=>setIsEditOpen(false)} open={isEditOpen}>

                    </Modal>
                </>

                <>
                    <button onClick={()=> setIsDeleteOpen(true)}>
                        <CiTrash className='size-6 text-error'/>
                    </button>
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
        <td>-</td>
    </Table.Row>
  )
}

export default ProjectRow