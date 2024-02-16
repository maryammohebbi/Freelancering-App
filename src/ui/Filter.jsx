import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({filterField, options}) {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentFilter = searchParams.get(filterField) || options.at(0).value

    const handleClick = (value)=> {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }


  return (
    <div className='flex items-center gap-x-2 text-xs'>
        <span>وضعیت</span>
        <div className='flex items-center p-1 gap-x-2 border border-secondary-100 rounded-lg'>
            {options.map(({label, value})=> {
                const isActive = value === currentFilter // if the filter in query is the same with value of our options, then isActive is true
            return (             
                <button 
                    onClick={()=> handleClick(value)}
                    key={value}
                    disabled={isActive}
                    className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
                        ${isActive 
                            ? "!bg-primary-900 text-white" 
                            : "bg-secondary-0 text-secondary-800"
                        }
                    `}
                >
                    {label}
                </button>
            )}
            )}
            
        </div>
    </div>
  )
}

export default Filter