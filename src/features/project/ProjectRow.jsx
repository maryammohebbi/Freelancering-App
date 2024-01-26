import React from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber'

function ProjectRow({index, project}) {
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
            <div className="flex">
                <button></button>
            </div>
        </td>
        <td>-</td>
    </Table.Row>
  )
}

export default ProjectRow