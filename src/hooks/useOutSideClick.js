import { useEffect, useRef } from "react";

export default function useOutSideClick(onClose, listenCapturing = true){
    const ref = useRef()

    useEffect(()=>{
        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)){
                onClose()
            }
        }

        document.addEventListener("click", handleClick, listenCapturing)

        return ()=> document.removeEventListener("click", handleClick, listenCapturing)
    }, [onClose, listenCapturing])

    return ref
}