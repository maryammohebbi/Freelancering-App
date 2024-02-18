import React from 'react'
import Table from '../../../ui/Table'

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
        <td>++</td>
    </Table.Row>
  )
}

export default UserRow