import http from "./httpService";

export function getCategoryApi(){
    return http.get("/category/list").then(({data})=> data.data)
}

export function createCategoryApi(data){
    return http.post("/admin/category/add", data).then(({data})=> data.data)
}

export function removeCategoryApi(id){
    return http.delete(`/admin/category/remove/${id}`).then(({data})=> data.data)
}