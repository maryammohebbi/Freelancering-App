import React, { useState } from 'react'
import Table from '../../../ui/Table'
import { GiToggles } from "react-icons/gi"
import Modal from '../../../ui/Modal'
import ChangeUserStatus from './ChangeUserStatus'

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
    // const [mouseOver, setMouseOver] = useState(false)
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
                <button onClick={()=>setOpen(true)}>
                    <GiToggles className='size-6'/>
                    {/* <span 
                        className="text-secondary-700 text-xs bg-secondary-50 absolute 
                        -top-full -left-0 opacity-0 transition-opacity duration-300 hover:top-0 hover:left-0 hoveropacity-100"
                    >
                        تغییر وضعیت کاربر
                    </span> */}
                </button>
                <Modal title="تغییر وضعیت کاربر" open={open} onClose={()=>setOpen(false)}>
                    <ChangeUserStatus onClose={()=> setOpen(false)} userId={user._id}/>
                </Modal>
                
            </div>
        </td>
    </Table.Row>
  )
}

export default UserRow