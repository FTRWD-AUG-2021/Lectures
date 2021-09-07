function NavBar(props) {
    console.log(props)
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>The sum is {props.sumAsAProp}</li>
            </ul>
        </nav>
    )
}
export default NavBar