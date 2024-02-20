import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCategoryApi } from "../../services/categoryService";
import toast from "react-hot-toast";

export default function useRemoveCategory(){
    const queryClient = useQueryClient()
    const {isPending: isDeleting, mutate: deleteCategory} = useMutation({
        mutationFn: removeCategoryApi,
        onSuccess: (data)=> {
            toast.success(data.message)

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })

    return {isDeleting, deleteCategory}
}