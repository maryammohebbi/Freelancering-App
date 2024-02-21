import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { checkOtp } from '../../services/authService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Loading from '../../ui/Loading'
import {HiArrowRight} from 'react-icons/hi'
import { FaArrowRotateLeft } from "react-icons/fa6"
import { FiEdit } from "react-icons/fi"

const RESENDOTP = 90
function CheckOTPForm({phoneNumber, onBack, onResendOtp, otpResponse}) {
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(RESENDOTP)
    const navigate = useNavigate()

    const {isPending, mutateAsync} = useMutation({
        mutationFn: checkOtp
    })

    const checkOtpHandler = async (e)=>{
        e.preventDefault()
        try {
            const {user, message} = await mutateAsync({phoneNumber, otp})
            toast.success(message)
            if(!user.isActive) return navigate("/complete-profile")
            if(user.status !== 2){
                toast("پروفایل شما در انتظار تایید است", {icon: "👀"})
                navigate("/")
            }
            if(user.role === "OWNER") return navigate("/owner")
            if(user.role === "FREELANCER") return navigate("/freelancer")
            if(user.role === "ADMIN") return navigate("/admin")
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(()=>{
        const timer = time > 0 && setInterval(() => {
            setTime(t => t - 1)
        }, 1000);
        return ()=> {
            if(timer) clearInterval(timer)
        }
    }, [time])
    
  return (
    <div>
        <button 
            onClick={onBack} 
            className='mb-8 bg-blue-200 p-2 rounded-full hover:bg-blue-300 transition-all duration-500'
        >
            <HiArrowRight className='w-4 h-4'/>
        </button>
        { otpResponse &&
            <div className='flex gap-x-1 items-center my-4'>
                <p>{otpResponse?.message}</p> 
                <button 
                    onClick={onBack} 
                    className='flex items-center underline text-sm gap-x-1 text-secondary-800'>
                        ویرایش شماره <FiEdit/>
                </button>
            </div>
        }
            
        <form className='space-y-10 mb-8' onSubmit={checkOtpHandler}>
            <p className='font-bold text-secondary-800'>کد تایید را وارد کنید</p>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input type='number' {...props} />}
                containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                inputStyle={{
                    width: "2.5rem",
                    padding: "0.5rem 0.2rem",
                    border: "1px solid rgb(var(--color-primary-400))",
                    borderRadius: "0.5rem"
                }}
            />
            {
                isPending ? <Loading/> :
                    <button className='btn btn--primary w-full'>تایید</button>
            }
        </form>
        { time > 0 ? (
            <p className='flex justify-center text-secondary-700'> {time} ثانیه تا ارسال مجدد کد </p>
            ) : (
            <button onClick={onResendOtp} className='flex gap-x-2 items-center mx-auto'>
                <span>ارسال مجدد کد</span>
                <FaArrowRotateLeft/>
            </button>
        )}
    </div>
  )
}

export default CheckOTPForm