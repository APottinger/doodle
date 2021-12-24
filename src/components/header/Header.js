

const Header = () => {


    return (
        <div>
            <h1>doodle</h1>
            <nav className="nav" style={{display: 'flex'}}>
                <ul style={{display: 'flex'}}>
                    <li style={{listStyle: 'none', padding: '2rem'}}><a href="#">Home</a></li>
                    <li style={{listStyle: 'none', padding: '2rem'}}><a href="#">Category</a></li>
                    <li style={{listStyle: 'none', padding: '2rem'}}><a href="#">Contact</a></li>
                </ul>
                <ul style={{display: 'flex'}}>
                    <li style={{listStyle: 'none', padding: '2rem'}}><a href="#">Join Now</a></li>
                    <li style={{listStyle: 'none', padding: '2rem'}}><a href="#">Login</a></li>
                </ul>
            </nav>
            <img src="https://www.uco.edu/cfad/images/art/art-header.jpg" height="500rem" width='100%' alt="" />
        </div>
    )
}

export default Header
