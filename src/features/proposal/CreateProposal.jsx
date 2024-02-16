import React from 'react'
import TextField from '../../ui/TextField'
import { useForm } from 'react-hook-form'
import useCreateProposal from './useCreateProposal'
import Loading from '../../ui/Loading'

function CreateProposal({onClose, projectId}) {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {isCreating, createProposal} = useCreateProposal()

    const onSubmit = (data)=> {
        createProposal(
            {...data, projectId},
            {onSuccess: ()=> {
                onClose()
            }}
            )

    }
  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <TextField
            label="توضیحات"
            name="description"
            required
            register={register}
            validationSchema={{
                required: "توضیحات ضروری است",
                minLength: {
                    value: 10,
                    message: "حداقل 10 کاراکتر وارد کنید"
                }
            }}
            errors={errors}

        />
        <TextField
            label="قیمت"
            name="price"
            required
            register={register}
            type='number'
            validationSchema={{
                required: "قیمت ضروری است"
            }}
            errors={errors}

        />
        <TextField
            label="مدت زمان"
            name="duration"
            required
            register={register}
            type='number'
            validationSchema={{
                required: "مدت زمان ضروری است"
            }}
            errors={errors}

        />
        <div className="!mt-4">
            {isCreating ? <Loading/> : <button className='btn btn--primary w-full'>ثبت</button>}
        </div>
    </form>
  )
}

export default CreateProposal