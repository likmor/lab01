import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

function NavBarMenuApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="mr-5" to="home">
          Home
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="mr-3">
              <NavLink to="lab01">Laboratorium 1</NavLink>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <NavLink to="lab02">Laboratorium 2</NavLink>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <NavLink to="lab03">Laboratorium 3</NavLink>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <NavLink to="lab04/add">Laboratorium 4</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenuApp;
