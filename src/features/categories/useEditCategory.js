import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCategoryApi } from "../../services/categoryService";
import toast from "react-hot-toast";

export default function useEditCategory(){
    const queryClient = useQueryClient()
    const {isPending: isEditing, mutate: editCategory} = useMutation({
        mutationFn: editCategoryApi,
        onSuccess: (data)=> {
            toast.success(data.message)

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (err)=> toast.error(err?.response?.data?.message)
    })

    return {isEditing, editCategory}
}