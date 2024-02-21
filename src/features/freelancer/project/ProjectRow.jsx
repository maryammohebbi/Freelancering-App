import React, { useState } from 'react'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../../utils/toPersianNumber'
import Table from '../../../ui/Table'
import truncateText from '../../../utils/truncateText'
import toLocalDateShort from '../../../utils/toLocalDateShort'
import {MdAssignmentAdd}  from "react-icons/md"
import Modal from '../../../ui/Modal'
import CreateProposal from '../../proposal/CreateProposal'
import { Tooltip } from '@mui/material'

const projectStatus = {
    OPEN: {
        label: "باز",
        className: "badge--success",
    },
    CLOSED: {
        label: "بسته",
        className: "badge--danger",
    }
}

function ProjectRow({project, index}) {
    const [open, setOpen] = useState(false)
    const {title, budget, deadline, status} = project
  return (
    <Table.Row>
        <td>{toPersianNumbers(index + 1)}</td>
        <td>{truncateText(title, 30)}</td>
        <td>{toPersianNumbersWithComma(budget)}</td>
        <td>{toLocalDateShort(deadline)}</td>
        <td>
            <span className={`badge ${projectStatus[status].className}`}>
                {projectStatus[status].label}
            </span>
        </td>
        <td>
            <>
                <Tooltip title="تغییر وضعیت پروژه" arrow placement='top'>
                    <button onClick={()=> setOpen(true)}>
                        <MdAssignmentAdd className="size-5 text-primary-900"/>
                    </button>
                </Tooltip>
                    
                
                <Modal onClose={()=> setOpen(false)} open={open} title={`ثبت پروپوزال برای "${title}"`}>
                    <CreateProposal onClose={()=> setOpen(false)} projectId={project._id}/>
                </Modal>
            </>
        </td>
    </Table.Row>
  )
}

export default ProjectRow