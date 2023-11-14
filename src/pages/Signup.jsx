import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import './Signup.css'

const Signup = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const email = credentials.email
    const password = credentials.password
    const {signup, isPending, error} = useSignup()


    const handleFormChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setCredentials(prevData => ({
          ...prevData,
          [name]: value,
        }))
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password)
        setCredentials({
            email: '',
            password: ''
        })

      }

    return (
        <div className="form-container">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                        {/* <button onClick={authSignInWithGoogle}>Sign in with Google</button> */}
                        <h1>Signup</h1>
                        <input 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder='email'
                                value={credentials.email}
                                onChange={handleFormChange}
                                />
                        <input 
                            id="password"
                            type="password" 
                            name="password" 
                            placeholder='password'
                            value={credentials.password}
                            onChange={handleFormChange}
                            />
                        <button>{isPending ? 'Loading' : 'Create Account'}</button>
                        {<p>{error}</p>}
                </form>
           </div>
        </div>

    )
}

export default Signup