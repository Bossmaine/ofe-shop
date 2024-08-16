import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../assets/ofe.png'
import { useSelector } from "react-redux";

function Header() {
  const { cartItems } = useSelector( state => state.cart);
  const numOfItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand ><img src={Logo} alt="logo" className="main-logo" /></Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart /> Cart
                {
                  cartItems.length > 0 && (
                    <Badge pill bg="success" className="cart-badge">
                      { numOfItems }
                    </Badge>
                  )
                }
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link >
                <FaUser /> Sign In
              </Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
