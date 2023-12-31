import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "./useAuthContext";
import { auth } from "../config/firebase";

export const useSignup = () => {

    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async(email, password) => {
        setError(null)

        try {
            await createUserWithEmailAndPassword(auth,email, password)

            dispatch({ type: 'LOGIN', payload: auth.currentUser})

            setError(null)
            
        }
        catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

    return { error, signup}
}