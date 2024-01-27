import React from 'react'
import ProjectHeader from '../features/singleProject/ProjectHeader'
import useProject from '../features/singleProject/useProject'
import Loading from '../ui/Loading'
import ProposalsTable from '../features/singleProject/ProposalsTable'

function SingleProject() {
  const { isLoading, project} = useProject()

  if(isLoading) return <Loading/>

  return (
    <div>
       <ProjectHeader project={project}/>
       <ProposalsTable proposals={project.proposals}/>
    </div>
  )
}

export default SingleProject