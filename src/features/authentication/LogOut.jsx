import React from 'react'
import {HiArrowRightOnRectangle} from "react-icons/hi2"
import useLogout from './useLogout'
import Loading from '../../ui/Loading'

function LogOut() {
    const {logout, isPending} = useLogout()
  return isPending ? (
    <Loading/>
    ) : (
    <button onClick={logout}>
        <HiArrowRightOnRectangle className='size-5 text-secondary-500 hover:text-error'/>
    </button>
  )
}

export default LogOut