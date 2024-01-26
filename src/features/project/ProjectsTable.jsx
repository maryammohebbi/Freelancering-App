import React from 'react'
import Loading from '../../ui/Loading'
import Empty from '../../ui/Empty'
import useOwnerProjects from './useOwnerProjects'
import Table from '../../ui/Table'
import ProjectRow from './ProjectRow'

function ProjectsTable() {
    const {projects, isLoading} = useOwnerProjects()

    if(isLoading) return <Loading/>
    if(!projects.length) return <Empty resourceName="پروژه"/>

console.log(projects);
  return (
    <Table>
        <Table.Header>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
        </Table.Header>
        <Table.Body>
            {projects.map((project, index) => (
                <ProjectRow key={project._id} index={index} project={project}/>
            ))}
        </Table.Body>
    </Table>
  )
}

export default ProjectsTable