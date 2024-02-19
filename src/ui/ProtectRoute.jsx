import React, { useEffect } from 'react'
import useAuthorize from '../features/authentication/useAuthorize'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import toast from 'react-hot-toast'

function ProtectRoute({children}) {
    const navigate = useNavigate()
    const {isAuthenticate, isAuthorized, isVerified, isLoading} = useAuthorize()
    // console.log(isAuthorized);
    useEffect(()=> {
        if(!isAuthenticate && !isLoading) navigate("/auth")
        if(!isAuthorized && !isLoading) navigate("/not-access", {replace: true})
        if(!isVerified && !isLoading){
            toast("پروفایل شما هنوز تایید نشده است", {icon: "👀"})
            navigate("/")
        }
    }, [isAuthenticate, isAuthorized, isLoading, navigate])

    if(isLoading){ 
        return (
            <div className='flex items-center justify-center h-screen bg-secondary-100'>
                <Loading/>
            </div>
        )
    }

  if(isAuthenticate && isAuthorized) return children
}

export default ProtectRoute