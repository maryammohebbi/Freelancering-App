import React, { useState } from 'react'
import Table from '../../ui/Table'
import { Tooltip } from '@mui/material'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { toPersianNumbers } from '../../utils/toPersianNumber'
import truncateText from '../../utils/truncateText'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import useRemoveCategory from './useRemoveCategory'
import CreateCategory from './CreateCategory'

function CategoryRow({category, index}) {
    const [openEditCat, setOpenEditCat] =  useState(false)
    const [openDeleteCat, setOpenDeleteCat] = useState(false)
    const {deleteCategory, isDeleting} = useRemoveCategory()
    return (
        <Table.Row >
            <td>{toPersianNumbers(index + 1)}</td>
            <td>{truncateText(category.title, 30)}</td>
            <td>{truncateText(category.englishTitle, 30)}</td>
            <td>{truncateText(category.description, 40)}</td>
            <td>{category.type}</td>
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <Tooltip title="ویرایش" arrow placement='top'>
                            <button onClick={()=>setOpenEditCat(true)}>
                                <CiEdit className='size-5 text-primary-900'/>
                            </button>
                        </Tooltip>
                        <Modal title={`ویرایش دسته بندی "${category.title}"`} open={openEditCat} onClose={()=> setOpenEditCat(false)}>
                            <CreateCategory onClose={()=> setOpenEditCat(false)} categoryToEdit={category}/>
                        </Modal>
                    </>
                    <>
                        <Tooltip title="حذف" arrow placement='top'>
                            <button onClick={()=>setOpenDeleteCat(true)}>
                                <CiTrash className='size-5 text-red-400'/>
                            </button>
                        </Tooltip>
                        <Modal title={`حذف دسته بندی "${category.title}"`} open={openDeleteCat} onClose={()=>setOpenDeleteCat(false)}>
                            <ConfirmDelete 
                                onConfirm={()=> deleteCategory(category._id, {
                                    onSuccess: ()=> setOpenDeleteCat(false)
                                })}
                                resourceName={category.title} 
                                onClose={()=> setOpenDeleteCat(false)} 
                                disabled={false}
                            />
                        </Modal>
                    </>
                </div>
                
            </td>
        </Table.Row>
  )
}

export default CategoryRow