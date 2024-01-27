import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import Modal from '../../ui/Modal'
import ChangeProposalStatus from './ChangeProposalStatus'
import { FaToggleOff } from "react-icons/fa6"

const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: "تایید شده",
        className: "badge--success"
    }
]

function ProposalRow({proposal, index}) {
    const {status, user} = proposal
    const [open, setOpen] = useState(false)
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{proposal.user.name}</td>
        <td>
            <p>{truncateText(proposal.description, 50)}</p>
        </td>
        <td>{proposal.duration} روز</td>
        <td>{proposal.price}</td>
        <td>
            <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
        </td>
        <td>
            <Modal
                title="تغییر وضعیت درخواست"
                open={open}
                onClose={()=> setOpen(false)}
            >
                <ChangeProposalStatus proposalId={proposal._id} onClose={()=> setOpen(false)}/>
            </Modal>
            <button 
                onClick={()=> setOpen(true)}
                className='flex gap-x-2 items-center bg-secondary-100 rounded-lg p-1'
                >
                <span className='text-secondary-800'>تغییر وضعیت</span>
                <FaToggleOff className='text-primary-900 size-6'/>
            </button>
        </td>

    </Table.Row>
  )
}

export default ProposalRow