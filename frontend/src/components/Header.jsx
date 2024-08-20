import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/ofe.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../slices/usersSlice";
import { removeCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const numOfItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logooutApi] = useLogOutMutation();

  const handleLogout = async () => {
    try {
      await logooutApi();
      dispatch(removeCredentials());
      navigate("/login");
    } catch (error) {
      toast.error('Unable to log out. Try again!');
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={Logo} alt="logo" className="main-logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" className="cart-badge">
                      {numOfItems}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {
                userInfo ? (<NavDropdown menuVariant="dark" title={userInfo.name}>
                <LinkContainer to="/profile">
                  <NavDropdown.Item variant="dark">Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaUser /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )
              }
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
