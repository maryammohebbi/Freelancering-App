import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField'
import useCreateCategory from './useCreateCategory'
import Loading from '../../ui/Loading'
import useEditCategory from './useEditCategory'
import RHFSelect from '../../ui/RHFSelect'

const typeOptions = [
    {
        label: "Project",
        value: "project"
    },
    {
        label: "Post",
        value: "post"
    },
    
    {
        label: "Comment",
        value: "comment"
    },
    {
        label: "Ticket",
        value: "ticket"
    },
]

function CreateCategory({onClose, categoryToEdit={}}) {
    const {_id: editId} = categoryToEdit
    const isEditSession = editId

    const {title, description, englishTitle, type} = categoryToEdit
    let editValues = {}

    if (isEditSession){
        editValues = {
            title,
            description,
            englishTitle,
            type
            
        }
    }
    
    const {register, formState: {errors}, handleSubmit, reset} = useForm({defaultValues: editValues})
    const {isCreating, createCategory} = useCreateCategory()
    const {editCategory} = useEditCategory()

    const onSubmit = (data)=> {
        const newCategory = {
            ...data
        }
        if(isEditSession){
            editCategory({id: editId, newCategory},
                {onSuccess: ()=>{
                    onClose()
                    reset()

                }})
        }else {
            createCategory({...newCategory}, {
                onSuccess: ()=> {
                    onClose()
                    reset()
                }
            })
        }
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

        <RHFSelect
            label= "نوع دسته بندی"
            name= "type"
            register={register}
            required
            options={typeOptions}
        />

        <div className="!mt-8">
            {isCreating ? <Loading/> : <button className='btn btn--primary w-full'>تایید</button>}
        </div>

        
    </form>
  )
}

export default CreateCategory