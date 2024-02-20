import React from 'react'
import Table from '../../ui/Table'
import useCategories from '../../hooks/useCategories'
import Loading from '../../ui/Loading'
import Empty from '../../ui/Empty'
import CategoryRow from './CategoryRow'

function CategoryTable() {
    const {isLoading, rawCategories} = useCategories()
    // console.log(rawCategories);
    if(isLoading) return <Loading/>
    if(!rawCategories.length) return <Empty resourceName="دسته بندی"/>

  return (
    <Table>
        <Table.Header>
            <th>#</th>
            <th>عنوان</th>
            <th>عنوان انگلیسی</th>
            <th>توضیحات</th>
            <th>نوع</th>
            <th>عملیات</th>
        </Table.Header>
        <Table.Body>
            {
                rawCategories.map((category, index)=> (
                    <CategoryRow key={category._id} category={category} index={index}/>
                ))
            }
        </Table.Body>
    </Table>
  )
}

export default CategoryTable