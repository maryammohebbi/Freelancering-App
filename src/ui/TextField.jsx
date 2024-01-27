import React from 'react'

function TextField({label, name, register, required, type="text", validationSchema, errors, value, onChange}) {
  return (
    <div>
        <label className='mb-2 block' htmlFor={name}>
            {label} {required && <span className='text-error'>*</span>}
        </label>
        <input 
            // type="text" 
            // value={value}
            // onChange={onChange}
            {...register(name, validationSchema)}
            type={type}
            id={name}
            autoComplete='off'
            className='textField__input'
        />
        {errors && errors[name] && (
          <span className='text-error block text-sm mt-2'>
            {errors[name]?.message}
          </span>
        )}
    </div>
  )
}

export default TextField