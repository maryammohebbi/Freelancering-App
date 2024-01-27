import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/authService'
import RadioInput from '../../ui/RadioInput'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useForm } from 'react-hook-form'
import RadioInputGroup from '../../ui/RadioInputGroup'

function CompleteProfile() {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [role, setRole] = useState("")
    const {register, formState: {errors}, watch} = useForm()
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
    <div className='container sm:max-w-screen-xl'>
        <div className='flex justify-center pt-10'>
            <div className='w-full sm:max-w-sm'>
                <p className='text-lg font-bold mb-16 text-secondary-800 text-center'>پروفایل خود را تکمیل کنید</p>
                <form onSubmit={handleSubmit} className='w-full sm:max-w-sm space-y-5'>
                    <TextField 
                        label= "نام و نام خانوادگی"
                        name= "name"
                        // value= {name}
                        // onChange={e=> setName(e.target.value)}
                        register={register}
                        validationSchema={{
                            required: "نام و نام خانوادگی ضروری است",
                            minLength: {
                                value: 5,
                                message: "نام و نام خانوادگی نباید از 5 کاراکتر کمتر باشد"
                            }
                        }}
                        errors={errors}
                    />
                    <TextField 
                        label= "ایمیل"
                        name= "email"
                        // value= {email}
                        // onChange={e=> setEmail(e.target.value)}
                        register={register}
                        validationSchema={{
                            required: "ایمیل ضروری است",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "ایمیل نامعتبر",
                            },
                        }}
                        errors={errors}
                    />
                    <RadioInputGroup
                        errors={errors}
                        register={register}
                        watch={watch}
                        configs={{
                            name: "role",
                            validationSchema: {required: "انتخاب نقش ضروری است"},
                            options: [
                                {
                                    value: "OWNER",
                                    label: "کارفرما",
                                },
                                {
                                    value: "FREELANCER",
                                    label: "فریلنسر"
                                }
                            ]
                        }}
                    />
                    { isPending ? ( <Loading/>
                        ) : (
                        <button className='btn btn--primary w-full'>تکمیل پروفایل</button>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default CompleteProfile