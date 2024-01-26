import React from 'react'
import TextField from '../../ui/TextField'
import RHFSelect from '../../ui/RHFSelect'
import { TagsInput } from 'react-tag-input-component'
import DatePickerField from '../../ui/DatePickerField'

function CreateProjectForm() {
  return (
    <form>
        <TextField
            label="عنوان پروژه"
            name="title"
        />
        <TextField
            label="توضیحات پروژه"
            name="description"
        />
        <TextField
            label="بودجه"
            name="budget"
            type="number"
        />
        <RHFSelect
            label="دسته بندی"
            required
            name="category"
        />
        <div>
            <label className="mb-2 block text-secondary-700">تگ ها</label>
            <TagsInput name='tags'/>
        </div>
        <DatePickerField/>
        <div>
            <button className='btn btn--primary w-full'>تایید</button>
        </div>
    </form>
  )
}

export default CreateProjectForm