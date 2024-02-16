import React from 'react'
import FilterDropDown from '../../../ui/FilterDropDown'
import useCategories from '../../../hooks/useCategories'
import Filter from '../../../ui/Filter'

function ProjectHeader() {
  const {transformedCategories} = useCategories()
  const sortOptions = [
    {
      value: "latest",
      label: "مرتب سازی (جدیدترین)"
    },
    {
      value: "earliest",
      label: "مرتب سازی (قدیمی ترین)"
    },
  ]
  const statusOptions = [
    {
      value: "ALL",
      label: "همه"
    },
    {
      value: "OPEN",
      label: "باز"
    },
    {
      value: "CLOSED",
      label: "بسته"
    },
  ]
  return (
    <div className='flex items-center justify-between text-secondary-700 mb-8'>
        <h1 className="text-lg font-bold">لیست پروژه ها</h1>
        <div className='flex gap-x-8 items-center'>

          <Filter filterField="status" options={statusOptions}/>

          <FilterDropDown
            options={sortOptions}
            filterField="sort"
          />

          <FilterDropDown
            options={[
              {
                value: "ALL",
                label: "دسته بندی (همه)"
              },
              ...transformedCategories
            ]}
            filterField="category"
          />
        </div>
    </div>
  )
}

export default ProjectHeader