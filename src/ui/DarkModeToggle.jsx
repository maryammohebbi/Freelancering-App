import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'

function DarkModeToggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode()

  return (
    <button onClick={toggleDarkMode}>
        {isDarkMode ? (
            <HiOutlineMoon className='size-5 text-primary-900'/>
            ) : (
            <HiOutlineSun className='size-5 text-primary-900'/>
        )}
    </button>
  )
}

export default DarkModeToggle