import { Fragment } from "react/jsx-runtime"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
   return (
     <Fragment>
      <Navbar expand="lg" className="navbar-light border">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='main-nav'>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/store">Hot Deals</NavLink>
                <NavLink className="nav-link" to="/store">Categories</NavLink>
                <NavLink className="nav-link" to="/store">Laptops</NavLink>
                <NavLink className="nav-link" to="/store">Smartphones</NavLink>
                <NavLink className="nav-link" to="/store">Cameras</NavLink>
                <NavLink className="nav-link" to="/store">Accessories</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     </Fragment>
   )
}

export default NavbarComponent