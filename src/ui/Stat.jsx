import React from 'react'
import { toPersianNumbers } from '../utils/toPersianNumber'

const colors = {
    primary: "bg-primary-100 text-primary-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    pink: "bg-pink-100 text-pink-700"

}

function Stat({icon, value, title, color}) {
  return (
    <div className='col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4 hover:shadow-xl transition-all duration-500'>
        <div className={`row-span-2 flex items-center p-2 aspect-square rounded-full
            ${colors[color]}
         hover:scale-105 transition-all duration-300`}>
            {icon}
        </div>
        <h5 className='font-bold text-secondary-500 text-lg self-center'>{title}</h5>
        <p className='text-3xl font-bold text-secondary-900'>{toPersianNumbers(value)}</p>
    </div>
  )
}

export default Stat