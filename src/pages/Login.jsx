import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isPending, error} = useLogin()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className="form-container">
            <div className="login-form">
                <form onSubmit={handleSubmit} >
                <h1>Login</h1>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value)}}
                    placeholder="Email"
                />
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => { setPassword(e.target.value)}}
                    placeholder="Password"    
                />
                <p>Forgot Password?</p>
                <button className="login-button">Login</button>
                {error && <p>{error}</p>}
                <p>Don't have an account? SIGNUP</p>
                </form>
            </div>
        </div>
        
    )
}

export default Login