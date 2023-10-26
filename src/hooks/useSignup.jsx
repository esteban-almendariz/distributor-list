import { useState } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword ,
    signInWithPopup, 
    signOut,
    onAuthStateChanged
   } from "firebase/auth"
import { auth } from "../config/firebase";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async(email, password) => {
        setError(null)
        setIsPending(true)

        try {
            await createUserWithEmailAndPassword(auth,email, password)

            setIsPending(false)
            setError(null)
        }
        catch (error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }
    return { error, isPending, signup}
}