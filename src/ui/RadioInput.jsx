import React from 'react'

function RadioInput({value, name, id, register, label, checked, validationSchema, errors, watch}) {
  return (
    <div className='flex items-center gap-x-2 text-secondary-600'>
        <input 
            className='cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900'
            type="radio"
            name={name}
            id={id}
            value={value}
            // onChange={onChange}
            {...register(name, validationSchema)}
            // checked={checked}
            checked={watch(name) === value}
        />
        <label htmlFor={id}>{label}</label>
        {/* {errors && errors[name] && (
          <span className='text-error block text-sm mt-2'>
            {errors[name]?.message}
          </span>
        )} */}
    </div>
  )
}

export default RadioInput