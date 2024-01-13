import React from 'react'

function TextField({label, name, value, onChange}) {
  return (
    <div>
        <label className='mb-2 block' htmlFor={name}>
            {label}
        </label>
        <input type="text" 
            value={value}
            onChange={onChange}
            id={name}
            autoComplete='off'
            className='textField__input'
        />
    </div>
  )
}

export default TextField