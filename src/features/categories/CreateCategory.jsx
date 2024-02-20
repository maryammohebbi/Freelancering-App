
import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField'
import useCreateCategory from './useCreateCategory'
import Loading from '../../ui/Loading'

function CreateCategory({onClose}) {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const {isCreating, createCategory} = useCreateCategory()

    const onSubmit = (data)=> {
        createCategory({...data, type:"project"}, {
            onSuccess: ()=> onClose()
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
        <TextField
            label="عنوان دسته بندی"
            name= "title"
            required
            register={register}
            validationSchema={{
               required: "عنوان ضروری است",
               minLength: {
                value: 5,
                message: "طول عنوان باید حداقل 5 کاراکتر باشد"

               }
            }}
            errors={errors}
        />
        <TextField
            label="توضیحات دسته بندی"
            name= "description"
            required
            register={register}
            validationSchema={{
                required: "توضیحات ضروری است",
                minLength: {
                 value: 10,
                 message: "طول توضیحات  باید حداقل 10 کاراکتر باشد"
 
                }
             }}
             errors={errors}
        />
        <TextField
            label="عنوان انگلیسی دسته بندی"
            name= "englishTitle"
            required
            register={register}
            validationSchema={{
                required: "عنوان انگلیسی ضروری است",
                minLength: {
                 value: 5,
                 message: "طول عنوان انگلیسی باید حداقل 5 کاراکتر باشد"
 
                }
             }}
             errors={errors}
        />
        {/* <TextField
            label="نوع دسته بندی"
            name= "type"
            required
            register={register}
            validationSchema={{
                required: "نوع دسته بندی ضروری است",
                minLength: {
                 value: 5,
                 message: "طول نوع دسته بندی باید حداقل 5 کاراکتر باشد"
 
                }
             }}
             errors={errors}
        /> */}
        <div className="!mt-8">
            {isCreating ? <Loading/> : <button className='btn btn--primary w-full'>تایید</button>}
        </div>

        
    </form>
  )
}

export default CreateCategory