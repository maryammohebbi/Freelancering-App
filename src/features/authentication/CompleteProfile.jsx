import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/authService'
import RadioInput from '../../ui/RadioInput'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Loading from '../../ui/Loading'

function CompleteProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const {isPending, mutateAsync} = useMutation({
        mutationFn: completeProfile
    })

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            const {user, message} = await mutateAsync({name, email, role})
            toast.success(message)
            if(user.status !== 2){
                navigate("/")
                toast("پروفایل شما در انتظار تایید است", {icon: "👀"})
            }

            if(user.role === "OWNER") return navigate("/owner")
            if(user.role === "FREELANCER") return navigate("/freelancer")
        } catch (error) {
            toast.error(error?.response?.data?.message)
            
        }
    }
  return (
    <div className='flex justify-center pt-10'>
        <div className='w-full sm:max-w-sm'>
            <p className='text-lg font-bold mb-16 text-secondary-800 text-center'>پروفایل خود را تکمیل کنید</p>
            <form onSubmit={handleSubmit} className='w-full sm:max-w-sm space-y-5'>
                <TextField 
                    label= "نام و نام خانوادگی"
                    name= "name"
                    value= {name}
                    onChange={e=> setName(e.target.value)}
                />
                <TextField 
                    label= "ایمیل"
                    name= "email"
                    value= {email}
                    onChange={e=> setEmail(e.target.value)}
                />
                <div className='flex justify-center gap-x-8'>
                    <RadioInput
                        label= "کارفرما"
                        value="OWNER"
                        name= "role"
                        id= "OWNER"
                        onChange={e=> setRole(e.target.value)}
                        cheched={role === "OWNER"}
                    />
                    <RadioInput
                        label= "فریلنسر"
                        value="FREELANCER"
                        role= "role"
                        id= "FREELANCER"
                        onChange={e=> setRole(e.target.value)}
                        cheched={role === "FREELANCER"}
                    />
                </div>
                { isPending ? ( <Loading/>
                    ) : (
                    <button className='btn btn--primary w-full'>تکمیل پروفایل</button>
                )}
            </form>
        </div>
    </div>
  )
}

export default CompleteProfile