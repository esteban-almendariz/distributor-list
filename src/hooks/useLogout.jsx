import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error , setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async() => {
        setError(null)
        setIsPending(true)

        try {
            await auth.signOut()

            dispatch({type: 'LOGOUT'})


            if(!isCancelled) {
                isPending(false)
                setError(null)
            }
        }

        catch (error) {
            if (!isCancelled) {
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            }
        }
    }

    //Want to check if removing useEffect and is cancelled state would break anything
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { logout, error, isPending}
}