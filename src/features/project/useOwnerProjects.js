import { useQuery } from "@tanstack/react-query"
import { getOwnerProjectApi } from "../../services/projectService"

export default function useOwnerProjects(){
    const {data, isLoading} =  useQuery({
        queryFn: getOwnerProjectApi,
        queryKey: ["owner-projects"]
    })

    const { projects } = data || {}
    return { projects, isLoading }
}