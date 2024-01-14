import React from 'react'

function RadioInput({label, value, name, onChange, id, cheched}) {
  return (
    <div className='flex items-center gap-x-2'>
        <input 
            className='cursor-pointer form-radio text-primary-900 focus:ring-primary-800'
            value={value}
            onChange={onChange}
            id={id}
            name={name}
            checked={cheched}
            type="radio"
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput