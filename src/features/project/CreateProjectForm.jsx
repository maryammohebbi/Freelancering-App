import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import RHFSelect from '../../ui/RHFSelect'
import { TagsInput } from 'react-tag-input-component'
import DatePickerField from '../../ui/DatePickerField'
import { useForm } from 'react-hook-form'
import useCategories from '../../hooks/useCategories'
import useCreateProject from './useCreateProject'
import useEditProject from './useEditProject'
import Loading from '../../ui/Loading'

function CreateProjectForm({onClose, projectToEdit = {}}) {
    const {_id: editId} = projectToEdit
    const isEditSession = Boolean(editId)

    const {title, description, budget, category, deadline, tags: prevTags} = projectToEdit

    let editValues = {}

    if(isEditSession){
        editValues = { 
            title, 
            description,
            budget, 
            category: category._id
        }
    }

    const {
        register, 
        formState: {errors}, 
        handleSubmit, 
        reset 
    } = useForm({ defaultValues: editValues })

    const [tags, setTags] = useState(prevTags || [])
    const [date, setDate] = useState(new Date(deadline || ""))
    const {categories} = useCategories()
    const {createProject, isCreating} = useCreateProject()
    const {editProject, isEditing} = useEditProject()

    const onSubmit = (data)=> {
        // console.log(data);
        const newProject = {
            ...data,
            tags,
            deadline: new Date(date).toISOString()
        }
        if(isEditSession){
            editProject({id: editId, newProject}, {
                onSuccess: ()=> {
                    onClose(),
                    reset()
                }
            })
        }else {
            createProject(newProject, {
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
            label="عنوان پروژه"
            name="title"
            required
            register={register}
            validationSchema={{
                required: "عنوان ضروری است",
                minLength: {
                    value: 10,
                    message: "طول عنوان نباید از 10 کاراکتر کمتر باشد"
                }

            }}
            errors={errors}
        />
        <TextField
            label="توضیحات پروژه"
            name="description"
            required
            register={register}
            validationSchema={{
                required: "توضیحات ضروری است",
                minLength: {
                    value: 15,
                    message: "طول توضیحات نباید از 15 کاراکتر کمتر باشد"
                }
            }}
            errors={errors}
        />
        <TextField
            label="بودجه"
            name="budget"
            type="number"
            required
            register={register}
            validationSchema={{
                required: "بودجه ضروری است",
            }}
            errors={errors}
        />
        <RHFSelect
            label="دسته بندی"
            required
            name="category"
            register={register}
            options={categories}
        />
        <div>
            <label className="mb-2 block text-secondary-700">تگ ها</label>
            <TagsInput value={tags} onChange={setTags} name='tags'/>
        </div>

        <DatePickerField date={date} setDate={setDate} label="ددلاین"/>

        <div className='!mt-4'>
            { isCreating ? <Loading/> : <button className='btn btn--primary w-full'>تایید</button> }
        </div>
    </form>
  )
}

export default CreateProjectForm