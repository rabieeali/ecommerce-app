import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  let activeClassName = "activeLink";

  return (
    <>
      <Navbar className="mb-5" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bolder font-logo text-danger">
            SHOES! 	&nbsp;	
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center g-3 p-2">
              <NavLink
                style={{ padding: "10px" }}
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </NavLink>
              <NavLink
                style={{ padding: "10px" }}
                to="/cart"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Cart
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
