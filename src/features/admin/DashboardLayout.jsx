import React from 'react'
import DashboardHeader from '../../ui/DashboardHeader'
import Stats from './Stats'
import useProjects from '../../hooks/useProjects'
import useProposals from '../proposal/useProposals'
import useUsers from './useUsers'
import useCategories from '../../hooks/useCategories'
import Loading from '../../ui/Loading'

function DashboardLayout() {
    const {isLoading: isProjectsLoading, projects} = useProjects()
    const {isLoading: isProposalsLoading, proposals} = useProposals()
    const {isLoading: isUsersLoading, users} = useUsers()
    const {isLoading: isCategoriesLoading, categories} = useCategories()

    if(isProjectsLoading || isProposalsLoading || isUsersLoading || isCategoriesLoading) return <Loading/>
  return (
    <div>
        <DashboardHeader/>
        <Stats projects={projects.length} proposals={proposals.length} users={users.length} categories={categories.length}/>
    </div>
  )
}

export default DashboardLayout