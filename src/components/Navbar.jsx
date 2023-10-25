import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar-logo'>My Logo</li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar