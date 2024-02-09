import React, { useState } from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import FreelancerSideMenu from './FreelancerSideMenu'
import MobileSidebar from '../../ui/MobileSidebar'

function FreelancerLayout() {
    const [freelancerMenuOpen, setFreelancerMenuOpen] = useState(false)
  return (
    <AppLayout onOpen={()=> setFreelancerMenuOpen(true)}>

        <Sidebar>
            <FreelancerSideMenu/>
        </Sidebar>

        <MobileSidebar onClose={()=> setFreelancerMenuOpen(false)} open={freelancerMenuOpen}>
            <FreelancerSideMenu/>
        </MobileSidebar>

    </AppLayout>
  )
}

export default FreelancerLayout