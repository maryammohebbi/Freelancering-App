import React, { useState } from 'react'
import Table from '../../../ui/Table'
import { GiToggles } from "react-icons/gi"
import Modal from '../../../ui/Modal'
import ChangeUserStatus from './ChangeUserStatus'
import { Button, Tooltip } from '@mui/material'

const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: " در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: "تایید شده",
        className: "badge--success"
    }
]


function UserRow({user, index}) {
    const {name, email, phoneNumber, role, status} = user
    const [open, setOpen] = useState(false)
    
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{role}</td>
        <td>
            {
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            }
        </td>
        <td>
            <div className='relative'>
                <Tooltip title="تغییر وضعیت" arrow placement='top'>
                    <Button onClick={()=>setOpen(true)}>
                        <GiToggles className='size-6 text-secondary-700'/>
                    </Button>
                </Tooltip>
                <Modal title="تغییر وضعیت کاربر" open={open} onClose={()=>setOpen(false)}>
                    <ChangeUserStatus onClose={()=> setOpen(false)} userId={user._id}/>
                </Modal>
                
            </div>
        </td>
    </Table.Row>
  )
}

export default UserRow