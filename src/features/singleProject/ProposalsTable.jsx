import React from 'react'
import Table from '../../ui/Table'
import ProposalRow from './ProposalRow'

function ProposalsTable({proposals}) {
  return (
    <Table>
        <Table.Header>
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
        </Table.Header>
        <Table.Body>
            {proposals.map((proposal, index) => (
                <ProposalRow proposal={proposal} index={index}/>
            ))}
        </Table.Body>
    </Table>
  )
}

export default ProposalsTable