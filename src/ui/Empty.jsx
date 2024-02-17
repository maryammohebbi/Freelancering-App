import React from 'react'

function Empty({resourceName}) {
  return (
    <div className='text-secondary-800'>
        هنوز {resourceName} ای موجود نیست 
    </div>
  )
}

export default Empty