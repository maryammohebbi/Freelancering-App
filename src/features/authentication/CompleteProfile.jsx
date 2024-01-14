import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/authService'
import RadioInput from '../../ui/RadioInput'

function CompleteProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const {isPending, mutateAsync} = useMutation({
        mutationFn: completeProfile
    })

  return (
    <div className='flex justify-center pt-10'>
        <div className='w-full sm:max-w-sm'>
            <p className='text-lg font-bold mb-16 text-secondary-800 text-center'>پروفایل خود را تکمیل کنید</p>
            <form className='w-full sm:max-w-sm space-y-5'>
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
                <button className='btn btn--primary w-full'>تکمیل پروفایل</button>
            </form>
        </div>
    </div>
  )
}

export default CompleteProfile