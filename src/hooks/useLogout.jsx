import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    
    const [error , setError] = useState(null)
    const { dispatch } = useAuthContext()

    const logout = async() => {
        setError(null)

        try {
            await auth.signOut()
            dispatch({type: 'LOGOUT'})
            setError(null)
        }

        catch (error) {
                console.log(error.message)
                setError(error.message)
        }
    }

    return { logout, error}
}