import React from 'react'
import RHFSelect from '../../../ui/RHFSelect'
import { useForm } from 'react-hook-form'
import useChangeUserStatus from './useChangeUserStatus'
import { useQueryClient } from '@tanstack/react-query'

const options = [
    {
        label: "رد شده",
        value: 0
    },
    {
        label: "در انتظار تایید",
        value: 1
    },
    {
        label: "تایید شده",
        value: 2
    },
]

function ChangeUserStatus({onClose, userId}) {
    const {register, handleSubmit} = useForm()
    const {isUpdating, changeUserStatus} = useChangeUserStatus()
    const queryClient = useQueryClient()

    const onSubmit = (data)=> {
        changeUserStatus(
        {data, userId}, 
        {
            onSuccess: ()=> {
                onClose()
                queryClient.invalidateQueries({queryKey: ["users"]})
            }
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
            name="status"
            options={options}
            register={register}
        />
        <div className="!mt-8">
            <button className='btn btn--primary w-full'>تایید</button>
        </div>
    </form>
  )
}

export default ChangeUserStatus