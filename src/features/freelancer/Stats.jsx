import React from 'react'
import Stat from '../../ui/Stat'
import { HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi'
import { ImCheckboxChecked } from "react-icons/im"
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber'

function Stats({proposals}) {
    const numOfProposals = proposals.length 
    const acceptedProposals = proposals.filter((p)=> p.status === 2)

    const balance = acceptedProposals.reduce((acc, curr)=> acc + curr.price ,0)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
        <Stat
            title="درخواست ها"
            value={numOfProposals}
            icon={<HiOutlineViewGrid className='size-20'/>}
            color="primary"
        />
        <Stat
            title="درخواست های تایید شده"
            value={acceptedProposals.length}
            icon={<ImCheckboxChecked className='size-20'/>}
            color="green"
            />
        <Stat
            title="کیف پول"
            value={toPersianNumbersWithComma(balance)}
            icon={<HiCurrencyDollar className='size-20'/>}
            color="yellow"
        />

    </div>
  )
}

export default Stats