import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser(){
    const {isLoading, data} = useQuery({
        queryFn: getUser,
        queryKey: ["get-user"],
        retry: false
    })

    const {user} = data || {}

    return {isLoading, user}
}