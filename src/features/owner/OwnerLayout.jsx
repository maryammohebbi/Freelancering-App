import React, { useState } from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import MobileSidebar from '../../ui/MobileSidebar'
import OwnerSideMenu from './OwnerSideMenu'

function OwnerLayout() {
    const [ownerMenuOpen, setOwnerMenuOpen] = useState(false)
  return (
    <div>
        <AppLayout onOpen={()=> setOwnerMenuOpen(true)} onClose={()=> setOwnerMenuOpen(false)}>
            <Sidebar>
                <OwnerSideMenu/>
            </Sidebar>

            <MobileSidebar open={ownerMenuOpen} onClose={()=> setOwnerMenuOpen(false)}>
                <OwnerSideMenu/>
            </MobileSidebar>
        </AppLayout>
    </div>
  )
}

export default OwnerLayout