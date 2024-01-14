import React from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'
import CheckOTPForm from '../features/authentication/CheckOTPForm'
import AuthContainer from '../features/authentication/AuthContainer'

function Auth() {
  return (
    <div className='w-full sm:max-w-sm pt-10 container mx-auto'>
        <AuthContainer/>
    </div>
  )
}

export default Auth