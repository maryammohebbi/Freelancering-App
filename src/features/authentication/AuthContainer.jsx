import React, { useState } from 'react'
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm'
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';

function AuthContainer() {
    const [step, setStep] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState("09334089892")

    const {isPending: isSendingOtp, mutateAsync, data: otpResponse} = useMutation({
        mutationFn: getOtp
    })

    const sendOtpHandler = async (e)=>{
        e.preventDefault()
        try {
            const data = await mutateAsync({phoneNumber})
            toast.success(data.message)
            setStep(2)
        } catch (error) {
            toast.error(error?.response?.data?.message)          
        }
    }


    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <SendOTPForm 
                        phoneNumber={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        onSubmit={sendOtpHandler}
                        isSendingOtp={isSendingOtp}
                    />)
            case 2:
                return (
                    <CheckOTPForm 
                        phoneNumber={phoneNumber} 
                        onBack={()=> setStep(s => s - 1)}
                        onResendOtp={sendOtpHandler}
                        otpResponse={otpResponse}
                    />)
        
            default: null
        }
    }
  return (
    <div> { renderStep() } </div>
  )
}

export default AuthContainer