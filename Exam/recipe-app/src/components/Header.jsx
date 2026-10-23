import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
     <Navbar.Brand as={Link} to="/">
    <img src={logo} alt="Recipe App Logo" width="40" height="40" className="me-2" />
  Recipe App
</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <div className="ms-auto">
        <Link to="/" className="me-3">Home</Link>
                <Link to="/add">Add Recipe</Link>
          </div>
     </Navbar.Collapse>
     </Container>
        </Navbar>
    )
}

export default Header