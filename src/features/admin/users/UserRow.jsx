import React from 'react'
import Table from '../../../ui/Table'

function UserRow({user, index}) {
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.role}</td>
        <td>{user.status}</td>
        <td>++</td>
    </Table.Row>
  )
}

export default UserRow