import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import './Navbar.css'

const Navbar = () => {
    const { logout } = useLogout()


    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar-logo'>My Logo</li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <button onClick={logout}>Logout</button>
            </ul>
        </nav>
    )
}

export default Navbar