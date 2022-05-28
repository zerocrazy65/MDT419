import "bootstrap/dist/css/bootstrap.min.css";
import "./AppHeader.css";

import { Container, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser,FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function AppHeader() {
  const { cartCount,isAuth } = useContext(UserContext);
  return (
    <header className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="myRed" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/image/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
        
            </Nav>
            <div className="NavRight">
              <Nav>
              <Nav.Link as={Link} to="/shoping">
                <FaShoppingBag/>
              </Nav.Link>
                {isAuth ? (
                  <>
                    <Nav.Link as={Link} to="/cart">
                      <div className="cart">
                        <span>
                          <FaShoppingCart />
                        </span>
                        <span>{cartCount}</span>
                      </div>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/profile">
                      <FaUser />
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    <div className="cart">login</div>
                  </Nav.Link>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppHeader;
