

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
            <img src="https://www.uco.edu/cfad/images/art/art-header.jpg" height="500rem" width='100%' alt="" />
        </div>
    )
}

export default Header
