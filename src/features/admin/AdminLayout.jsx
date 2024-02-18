import React, { useState } from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import MobileSidebar from '../../ui/MobileSidebar'
import AdminSideMenu from './AdminSideMenu'

function AdminLayout() {
    const [adminMenuOpen, setAdminMenuOpen] = useState(false)
  return (
    <AppLayout onOpen={()=> setAdminMenuOpen(true)}>

        <Sidebar>
            <AdminSideMenu/>
        </Sidebar>

        <MobileSidebar onClose={()=> setAdminMenuOpen(false)} open={adminMenuOpen}>
            <AdminSideMenu/>
        </MobileSidebar>

    </AppLayout>
  )
}

export default AdminLayout