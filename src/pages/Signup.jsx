import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

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
        <div>
            <h1>Signup</h1>
            <div>
                <h1>Distributors List</h1>
                <form onSubmit={handleSubmit} className='form-sign-in'>
                        {/* <button onClick={authSignInWithGoogle}>Sign in with Google</button> */}
                        
                        <label htmlFor="email">email:</label>
                        <input 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder='email'
                                value={credentials.email}
                                onChange={handleFormChange}
                                />
                        <label htmlFor="password">password:</label>
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
                        {/* <button className='sign-in-btn' onClick={authSignInWithEmailandPassword}>Sign in</button>
                        <button className='create-account-btn' onClick={handleSubmit}>Create Account</button> */}
                </form>
           </div>
        </div>

    )
}

export default Signup