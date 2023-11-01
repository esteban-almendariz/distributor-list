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
    const [isCancelled, setIsCancelled] = useState(false)
    const [error , setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async(email, password) => {
        setError(null)
        setIsPending(true)

        try {
            await auth.signInWithEmailAndPassword(email, password)

            dispatch({type: 'LOGIN', payload: auth.currentUser})


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

    return { login, error, isPending}
}