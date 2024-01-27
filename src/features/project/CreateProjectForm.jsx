import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import RHFSelect from '../../ui/RHFSelect'
import { TagsInput } from 'react-tag-input-component'
import DatePickerField from '../../ui/DatePickerField'
import { useForm } from 'react-hook-form'
import useCategories from '../../hooks/useCategories'

function CreateProjectForm() {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const {categories} = useCategories()
    const onSubmit = (data)=> {
        console.log(data);
    }

    const [tags, setTags] = useState([])
    const [date, setDate] = useState(new Date())
    
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
            <button className='btn btn--primary w-full'>تایید</button>
        </div>
    </form>
  )
}

export default CreateProjectForm