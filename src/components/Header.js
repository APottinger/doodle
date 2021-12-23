
const Header = () => {
    return (
        <div>
            <h1>doodle</h1>
            <nav className="nav">
                <ul style={{display: 'flex'}}>
                    <li style={{listStyle: 'none', padding: '2rem'}}>Home</li>
                    <li style={{listStyle: 'none', padding: '2rem'}}>About</li>
                    <li style={{listStyle: 'none', padding: '2rem'}}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
