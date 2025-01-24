// Impoprt thư viện và thành phần cần thiết
import "./App.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppRoutes from "./config/routes";
import { AiOutlineTablet, AiOutlineUser } from "react-icons/ai";

function App() {
  return (
    <>
      <Navbar expand="md" sticky="top">
        <Container fluid="xxl">
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            className="me-auto"
          />
          <Navbar.Brand as={Link} to="/" className="mx-auto ms-md-auto">
            Giọt Coffee
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={"offcanvasNavbar-expand-md"}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <Nav className="sidebar mx-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/menu">
                  Menu
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/news">
                  News
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <hr className="divider d-md-none" />
              <Nav className="CTA-group mx-auto d-md-none">
                <Nav.Link as={Link} to="/reservation">
                  <AiOutlineTablet className="CTA-icon" />
                </Nav.Link>
                <Nav.Link as={Link} to="/membership">
                  <AiOutlineUser className="CTA-icon" />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className="CTA-group ms-auto ">
            <Nav.Link as={Link} to="/reservation">
              <AiOutlineTablet className="CTA-icon" />
            </Nav.Link>
            <Nav.Link as={Link} to="/membership">
              <AiOutlineUser className="CTA-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Route */}
      <AppRoutes />
    </>
  );
}

export default App;
