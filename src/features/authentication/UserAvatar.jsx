import React from 'react'
import useUser from './useUser'

function UserAvatar() {
    const {user} = useUser()
  return (
    <div  className='flex items-center gap-x-2 text-secondary-600' >
        <img
            className='size-7 rounded-full object-cover object-center'
            src="/user.jpg" alt="user-acount" 
         />
        <span>{user?.name}</span>
    </div>
  )
}

export default UserAvatar