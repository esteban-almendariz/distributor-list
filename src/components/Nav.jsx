

const Nav = (props) => {

    return (
        <nav>
            <button onClick={props.handleSignOut}>Sign Out</button>
        </nav>
    )
}

export default Nav