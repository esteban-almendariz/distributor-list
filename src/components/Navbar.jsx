

const Navbar = (props) => {

    return (
        <nav>
            <button onClick={props.handleSignOut}>Sign Out</button>
        </nav>
    )
}

export default Navbar