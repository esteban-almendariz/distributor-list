import { useState } from "react";
import { auth } from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
    const [error , setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async() => {
        setError(null)
        setIsPending(true)

        try {
            await auth.signOut()

            dispatch({type: 'LOGOUT'})

            setIsPending(false)
            setError(null)
        }

        catch (error) {
            console.log(error.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { logout, error, isPending}
}