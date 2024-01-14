import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import { useMutation } from '@tanstack/react-query'
import { getOtp } from '../../services/authService'
import toast from 'react-hot-toast'
import Loading from '../../ui/Loading'

function SendOTPForm({setStep}) {
    const [phoneNumber, setPhoneNumber] = useState("")

    const {isPending, mutateAsync} = useMutation({
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
  return (
    <div>
        <form className='space-y-8' onSubmit={sendOtpHandler}>
            <TextField 
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                label="شماره موبایل خود را وارد کنید"
            />
            { isPending ? <Loading/> :             
                <button className='btn btn--primary w-full'>ارسال کد تایید</button>
            }
        </form>
    </div>
  )
}

export default SendOTPForm