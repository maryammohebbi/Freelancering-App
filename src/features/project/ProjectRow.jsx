import React from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'

function ProjectRow({index, project}) {
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{truncateText(project.title, 30)}</td>
        <td>{project.category.title}</td>
        <td>{project.budget}</td>
        <td>{project.deadline}</td>
        <td>
            <div className='flex flex-wrap max-w-[200px] items-center gap-2'>
                {project.tags.map((tag)=> (
                    <span key={tag} className='badge badge--secondary'>{tag}</span>
                ))}
            </div>
        </td>
        <td>{project.freelancer?.name || "ندارد"}</td>
        <td>{project.status}</td>
        <td>++</td>
        <td>-</td>
    </Table.Row>
  )
}

export default ProjectRow