import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'
import { Tooltip } from '@mui/material'

function DarkModeToggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode()

  return (
    <Tooltip title="تغییر تم" arrow>
      <button onClick={toggleDarkMode}>
          {isDarkMode ? (
              <HiOutlineMoon className='size-5 text-primary-900'/>
              ) : (
              <HiOutlineSun className='size-5 text-primary-900'/>
          )}
      </button>
    </Tooltip>
  )
}

export default DarkModeToggle