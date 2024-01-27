import React from 'react'
import Toggle from '../../ui/Toggle'
import useToggleProjectStatus from './useToggleProjectStatus'
import Loading from '../../ui/Loading'

function ToggleProjectStatus({project}) {
    const { status } = project

    const {toggleProjectStatus, isUpdating} = useToggleProjectStatus()

    const toggleHandler = ()=> {
        const newStatus = status === "OPEN" ? "CLOSED" : "OPEN"
        toggleProjectStatus({
            id: project._id,
            data: {status: newStatus}
         })
    }

  return (
    <div className='w-[7rem]'>
        {
           isUpdating ? (<Loading width={50} height={20}/> ) : (
            <Toggle
                enabled={status === "OPEN" ? true : false}
                label={status === "OPEN" ? "باز" : "بسته"}
                onChange={toggleHandler}
            />
           )
        }
        
    </div>
  )
}

export default ToggleProjectStatus