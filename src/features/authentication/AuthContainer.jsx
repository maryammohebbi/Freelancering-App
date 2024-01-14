import React, { useState } from 'react'
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm'

function AuthContainer() {
    const [step, setStep] = useState(2)

    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm setStep={setStep}/>
            case 2:
                return <CheckOTPForm/>
        
            default: null
        }
    }
  return (
    <div> { renderStep() } </div>
  )
}

export default AuthContainer