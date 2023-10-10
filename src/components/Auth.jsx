
import { useState } from "react"
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword ,
         signInWithPopup, 
         signOut,
         onAuthStateChanged
        } from "firebase/auth"

const Auth = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const email = credentials.email
    const password = credentials.password

    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setCredentials(prevData => ({
          ...prevData,
          [name]: value,
        }))
      }
    
      const handleSubmit = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)

            setCredentials({
                email: '',
                password: ''
            })
            console.log(`user created ${auth.currentUser.email}`)
        } catch (error) {
            console.log(error.message)
        } 
      }

      const authSignInWithEmailandPassword = async() => {
            try {
                await signInWithEmailAndPassword(auth, email, password)

                setCredentials({
                    email: '',
                    password: ''
                })
                console.log(`user logged in ${auth.currentUser.email}`)
            } catch(error) {
                console.log(error.message)
            }
        }

      const authSignInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch(error) {
            console.log(error.message)
      }}

      const authSignOut = async() => {
        try {
            await signOut(auth)
            console.log(`user logged out`)
        } catch(error) {
            console.log(error.message)
      } }

      onAuthStateChanged(auth, (user) => {
        if(user) {
            console.log('user is signed in from Auth State Changed')
        } else {
            console.log('user is singed out from Auth State Changed')
        }
      })

    return (
        <div id='logged-out-view'>
          <h1>Distributors List</h1>
          
          <div className='sign-in-form'>
            
            <button onClick={authSignInWithGoogle}>Sign in with Google</button>
            
            <input type="email" 
                    name="email" 
                    placeholder='Email'
                    value={credentials.email}
                    onChange={handleFormChange}
                    />
            <input type="password" 
                   name="password" 
                   placeholder='Password'
                   value={credentials.password}
                   onChange={handleFormChange}
                   />

            <button className='sign-in-btn' onClick={authSignInWithEmailandPassword}>Sign in</button>
            <button className='create-account-btn' onClick={handleSubmit}>Create Account</button>
            <button onClick={authSignOut}>Logout</button>
          </div>
      </div>
    )

}

export default Auth