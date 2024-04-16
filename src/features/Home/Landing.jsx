
import React from 'react'

const projectsList = [
  {
    id: 1,
    title: "برنامه نویسی و توسعه نرم افزار"
  },
  {
    id: 2,
    title: "طراحی وب سایت"
  },
  {
    id: 3,
    title: "ترجمه"
  },
  {
    id: 4,
    title: "تولید محتوا"
  },
  {
    id: 5,
    title: "ادمین"
  },
  {
    id: 6,
    title: "تایپ"
  },
  {
    id: 7,
    title: "مدیریت پروژه"
  },
  {
    id: 8,
    title: "طراحی گرافیکی"
  },
  {
    id: 9,
    title: "طراحی لوگو"
  },
  {
    id: 10,
    title: "تولید و ویرایش ویدیو"
  },
  {
    id: 11,
    title: "طراحی کارت ویزیت"
  },

]


function Landing() {

  return (
    <div className='flex justify-center items-center p-5'>
        <div 
          className='w-[20rem] h-[13rem] sm:w-[30rem] sm:h-[15rem] md:w-[40rem] md:h-[20rem] 
          lg:w-[50rem] lg:h-[30rem] absolute top-[20%] bg-slate-400/30 rounded-2xl p-5' 
        >
            <h1 className='text-slate-100 font-bold text-center sm:text-lg md:text-xl lg:text-2xl'>بهترین فریلنسرها را استخدام کنید.</h1>
            <h3 className='text-slate-300 font-bold sm:text-sm md:text-lg lg:text-xl mb-2 lg:mb-5'>تنوع در پروژه ها:</h3>
            <ul className='text-xs text-neutral-950 font-bold sm:text-sm md:text-xl lg:text-2xl flex flex-wrap gap-2'>
              {
                projectsList.map(project => 
                  <li
                    key={project.id} 
                    className='border border-slate-50 p-1 lg:p-4 rounded-xl shadow-2xl hover:bg-green-950/45 hover:text-white transition-all duration-500'>
                      {project.title}
                  </li>
                )
              }
            </ul>
            <h4 className='hidden md:block text-white font-bold text-xl text-center mt-4 lg:text-2xl lg:mt-8'>🌟همین الان پروژه ی خود را سفارش دهید.</h4>
      </div>
    </div>
  )
}

export default Landing