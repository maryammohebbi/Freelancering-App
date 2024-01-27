import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories(){
    const {data, isLoading} = useQuery({
        queryFn: getCategoryApi,
        queryKey: ["categories"]

    })

    const { categories: rawCategories = []} = data || {}

    const categories = rawCategories.map((item)=> ({
        label: item.title,
        value: item._id
    }))

    const transformedCategories = rawCategories.map((item)=> ({
        label: item.title,
        value: item.englishTitle
    }))

    return {categories, transformedCategories, isLoading}
}