import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    onAuthStateChanged
   } from "firebase/auth"
import { googleProvider } from "../config/firebase";
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

    const authSignInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
            dispatch({type: 'LOGIN', payload: auth.currentUser})
            setError(null)
        } catch(error) {
            console.log(error.message)
      }}




    return { login, authSignInWithGoogle, error}
}