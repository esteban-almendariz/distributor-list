import { Link } from "react-router-dom"
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showTestCred, setShowTestCred] = useState(false)
    const {login, error} = useLogin()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    const testProject = (e) => {
        e.preventDefault()
        setShowTestCred(prevState => !prevState)
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
                    {/* <p>Forgot Password?</p> */}
                    <button className="login-button">Login</button>
                    <button className="login-test-btn" type="button" onClick={(e) => testProject(e)} >Test Project</button>
                    {showTestCred && <p>Login: test@gmail.com Password: Testproject12</p>}
                    {error && <p>{error}</p>}
                    <Link className="links" to='/signup'><p>Don't have an account? SIGNUP</p></Link>
                </form>
            </div>
        </div>
        
    )
}

export default Login