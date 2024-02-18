import React from 'react'
import ProposalsTable from '../features/proposal/ProposalsTable'

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        لیست پروپوزال ها 
      </h1>
      <ProposalsTable/>
    </div>
  )
}

export default Proposals