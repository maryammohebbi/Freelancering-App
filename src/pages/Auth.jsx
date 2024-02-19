import React from 'react'
import AuthContainer from '../features/authentication/AuthContainer'

function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className='container sm:max-w-screen-xl'>
        <div className='w-full sm:max-w-sm pt-10 container mx-auto'>
            <AuthContainer/>
        </div>
      </div>
    </div>
  )
}

export default Auth