import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';



function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Bank X,Y,Z</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/homeview" className="navLink">Home</NavLink>
                    <NavLink to="/payment" className="navLink">Pay and transfer</NavLink>
                    <NavLink href="#pricing" className="navLink">Security and privacy</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}





export default NavBar;

