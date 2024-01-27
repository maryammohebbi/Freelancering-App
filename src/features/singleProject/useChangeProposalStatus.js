import { useMutation } from "@tanstack/react-query";
import { changeProposalstatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus(){
    const {mutate: changeProposalStatus, isPending: isUpdating} = useMutation({
        mutationFn: changeProposalstatusApi,

        onSuccess: (data)=> {
            toast.success(data.message)
        },
        onError: (err)=> {
            toast.error(err?.response?.data?.message)
        }
    })

    return {changeProposalStatus, isUpdating}
}