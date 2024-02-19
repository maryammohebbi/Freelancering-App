import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize (){
    const {user, isLoading} = useUser()
    const {pathname} = useLocation()

    let isAuthenticate = false
    if(user) isAuthenticate = true

    let isVerified = false
    if(user && user.status === 2) isVerified = true
    
    let isAuthorized = false


    // if(pathname.includes("owner")){
    //     if(user && user.role === "OWNER") isAuthorized = true
    // }

    // if(pathname.includes("freelancer")){
    //     if(user && user.role === "FREELANCER") isAuthorized = true
    // }

    // if(pathname.includes("admin")){
    //     if(user && user.role === "ADMIN") isAuthorized = true
    // }

    // console.log(pathname.split("/").at(1))
    const desiredRole = pathname.split("/").at(1)

    const ROLES = {
        admin: "ADMIN",
        owner: "OWNER",
        freelancer: "FREELANCER"
    }

    if(Object.keys(ROLES).includes(desiredRole)){
        if(user && user.role === ROLES[desiredRole]) isAuthorized = true
    }

    return {isLoading, isAuthenticate, isAuthorized, isVerified}
}