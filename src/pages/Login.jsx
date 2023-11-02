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
        <form onSubmit={handleSubmit} className="login-form">
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
            <button>Login</button>
            {error && <p>{error}</p>}
            <p>Don't have an account? SIGNUP</p>
        </form>
    )
}

export default Login