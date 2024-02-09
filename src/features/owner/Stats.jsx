import React from 'react'
import Stat from '../../ui/Stat'
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi'

function Stats({projects}) {
    const numOfProjects = projects.length 
    const numOfAcceptedProjects = projects.map((p)=> p.status === 2).length
    const numOfProposals = projects.reduce(
        (acc, curr)=> curr.proposals.length + acc, 
        0
    )

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
        <Stat
            title="پروژه ها"
            value={numOfProjects}
            icon={<HiOutlineViewGrid className='size-20'/>}
            color="primary"
        />
        <Stat
            title="پروژه های واگذار شده"
            value={numOfAcceptedProjects}
            icon={<HiCurrencyDollar className='size-20'/>}
            color="green"
        />
        <Stat
            title="درخواست ها"
            value={numOfProposals}
            icon={<HiCollection className='size-20'/>}
            color="yellow"
        />
    </div>
  )
}

export default Stats