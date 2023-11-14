import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import './Navbar.css'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    console.log('from NAvbar', user)

    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar-logo'>Simpler</li>
                {!user && (
                    <>
                    <li className='navbar-link'><Link to='/login'>Login</Link></li>
                    <li className='navbar-link'><Link to='/signup'>Signup</Link></li>
                </>
                )}
                {user && <button onClick={logout}>Logout</button>}
            </ul>
        </nav>
    )
}

export default Navbar