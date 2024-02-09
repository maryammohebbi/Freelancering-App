import React from 'react'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../../utils/toPersianNumber'
import Table from '../../../ui/Table'
import truncateText from '../../../utils/truncateText'
import toLocalDateShort from '../../../utils/toLocalDateShort'
import {MdAssignmentAdd}  from "react-icons/md"

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
            <button>
                <MdAssignmentAdd className="size-5 text-primary-900"/>
            </button>
        </td>
    </Table.Row>
  )
}

export default ProjectRow