import React, { useEffect, useState } from 'react'
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm'
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';

function AuthContainer() {
    const navigate = useNavigate()
    const [step, setStep] = useState(2)
    // const [phoneNumber, setPhoneNumber] = useState("09123456789")
    const {register, handleSubmit, getValues} = useForm({defaultValues: { phoneNumber: "09123456789"}})

    const {isPending: isSendingOtp, mutateAsync, data: otpResponse} = useMutation({
        mutationFn: getOtp
    })

    const {user} = useUser()
    useEffect(()=>{
        if(user) navigate("/", {replace: true})
    }, [user, navigate])

    const sendOtpHandler = async (data)=>{
        // e.preventDefault()
        try {
            const {message} = await mutateAsync({data})
            toast.success(message)
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
                        // phoneNumber={phoneNumber}
                        // onChange={e => setPhoneNumber(e.target.value)}
                        register={register}
                        onSubmit={handleSubmit(sendOtpHandler)}
                        isSendingOtp={isSendingOtp}
                        // errors={errors}
                    />)
            case 2:
                return (
                    <CheckOTPForm 
                        // phoneNumber={phoneNumber} 
                        phoneNumber={getValues("phoneNumber")}
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