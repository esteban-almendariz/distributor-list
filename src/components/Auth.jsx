
import { useState, useEffect } from "react"
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword ,
         signInWithPopup, 
         signOut,
         onAuthStateChanged
        } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const Auth = (props) => {
    
    
    const defaultProfileUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png";

    const [signInWithGoogle, setSignInWithGoogle] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const email = credentials.email
    const password = credentials.password
    

   

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

                props.switchLogIn()
                setSignInWithGoogle(false)
                
            } catch(error) {
                console.log(error.message)
            }
        }

      const authSignInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
            props.switchLogIn()
            setSignInWithGoogle(true)
        } catch(error) {
            console.log(error.message)
      }}

      const authSignOut = async() => {
        try {
            await signOut(auth)
            props.switchLogIn()
            setSignInWithGoogle(false)
            console.log(`user logged out`)
        } catch(error) {
            console.log(error.message)
      } }


      useEffect(() => {
    
            onAuthStateChanged(auth, (user) => {
            if(user) {
                
                // setUserLoggedIn(true)
                props.switchLogIn
            } else {
                
                // setUserLoggedIn(false)
                props.switchLogIn
            }
        })
      }, [credentials])
      
      

    return (
        <div>
          {props.userLoggedIn && 
          <nav className="nav-loggedIn">  
             <p className="logo">SIMPLER</p>
             <div className="logout-container">
                <img className="profile-img" src={signInWithGoogle ? auth.currentUser.photoURL
                : defaultProfileUrl} alt="" />
                <button className="btn-logout" onClick={authSignOut}>Logout</button>
             </div> 
          </nav>}
            
           {!props.userLoggedIn && 
           <div>
                <h1>Distributors List</h1>
                <div className='form-sign-in'>
                        <button onClick={authSignInWithGoogle}>Sign in with Google</button>
                        
                        <label htmlFor="email">Email:</label>
                        <input 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder='Email'
                                value={credentials.email}
                                onChange={handleFormChange}
                                />
                        <label htmlFor="password">Password:</label>
                        <input 
                            id="password"
                            type="password" 
                            name="password" 
                            placeholder='Password'
                            value={credentials.password}
                            onChange={handleFormChange}
                            />

                        <button className='sign-in-btn' onClick={authSignInWithEmailandPassword}>Sign in</button>
                        <button className='create-account-btn' onClick={handleSubmit}>Create Account</button>
                </div>
           </div>}
           
      </div>
    )

}

export default Auth

