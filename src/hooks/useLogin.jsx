import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    signOut,
    onAuthStateChanged
   } from "firebase/auth"
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error , setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async(email, password) => {
        setError(null)

        console.log('login method ran')

        try {
            await signInWithEmailAndPassword(auth, email, password)
            dispatch({type: 'LOGIN', payload: auth.currentUser})
            setError(null)
        }

        catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }




    return { login, error}
}