import React from 'react'
import { HiArrowRight, HiHome } from 'react-icons/hi';
import { TbError404 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import useMoveBack from '../hooks/useMoveBack';

function NotFound() {
    const navigate = useNavigate()
    const moveBack = useMoveBack()
  return (
    <div className='bg-secondary-0 h-screen'>
        <div className='flex justify-center pt-10 '>
            <div className='max-w-sm sm:max-w-lg lg:max-w-2xl flex flex-col items-center gap-y-8'>
                <TbError404 className='text-secondary-800 w-40 h-40 md:w-96 md:h-96'/>
                <p className='font-bold text-5xl text-secondary-900'>اوپس! 😬</p>
                <p className='font-bold text-3xl text-secondary-900'>اینجا خبری نیست ...</p>
                <div className='w-full flex justify-between'>
                    <button
                        onClick={moveBack} 
                        className='flex gap-x-2 text-lg items-center text-primary-900'>
                        <HiArrowRight/>
                        <span>برگشت</span>
                    </button>
                    <button 
                        onClick={e=> navigate("/")}
                        className='flex gap-x-2 text-lg items-center text-primary-900'>
                        <span>خانه</span>
                        <HiHome/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFound