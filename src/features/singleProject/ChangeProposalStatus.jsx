import React from 'react'
import RHFSelect from '../../ui/RHFSelect'
import { useForm } from 'react-hook-form'
import Loading from '../../ui/Loading'
import { useParams } from 'react-router-dom'
import useChangeProposalStatus from './useChangeProposalStatus'
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

function ChangeProposalStatus({proposalId, onClose}) {
    const {id: projectId} = useParams()
    const {changeProposalStatus, isUpdating} = useChangeProposalStatus()
    const {register, handleSubmit} = useForm()
    const queryClient = useQueryClient()

    const onSubmit = (data)=> {
        changeProposalStatus({id: proposalId, data}, {
            onSuccess: ()=> {
                queryClient.invalidateQueries({
                    queryKey: ["project", projectId]
                })
                onClose()
            }
        })
    }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
            name="status"
            label= "تغییر وضعیت"
            register={register}
            options={options}
            required
        />
        <div className="!mt-8">
                {
                    isUpdating ? (<Loading/>) : (
                        <button className='btn btn--primary w-full'>
                            تایید
                        </button>
                    )
                }
            </div>
    </form>
  )
}

export default ChangeProposalStatus