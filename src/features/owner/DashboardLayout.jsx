import React from 'react'
import OwnerDashboardHeader from './OwnerDashboardHeader'
import Stats from './Stats'
import useOwnerProjects from '../project/useOwnerProjects'
import Loading from '../../ui/Loading'

function DashboardLayout() {
    const {projects, isLoading} = useOwnerProjects()

    if(isLoading) return <Loading/>
    
  return (
    <div>
        <OwnerDashboardHeader/>
        <Stats projects={projects}/>
    </div>
  )
}

export default DashboardLayout