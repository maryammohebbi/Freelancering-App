import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser(){
    return useQuery({
        queryFn: getUser,
        queryKey: ["get-user"],
        retry: false
    })
}