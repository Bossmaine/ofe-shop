import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import Message from "../components/Message";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleAddToCart = async (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  }

  const handleRemoveFromCart = async (product) => {
    dispatch(removeFromCart(product));
  }

  const handleCheckOut = () => {
    navigate('/login?redirect=/shipping');
  }

  return (
    <Row>
      <Col md={8}>
        <h1 className="cart-header">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Start Shopping</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id} >
                <Row>
                  <Col md={2} className="mb-2">
                    <Image src={item.image} alt={item.name} fluid rounded className="cart-image" />
                  </Col>
                  <Col md={3} className="mb-2">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} className="mb-2">${item.price}</Col>
                  <Col md={2} className="mb-2">
                    <Form.Control
                      as="select"
                      value={item.quantity}
                      onChange={(event) => handleAddToCart(item, Number(event.target.value))
                      }
                      className="quantity-form">
                      {[...Array(item.countInStock).keys()].map((item) => (
                        <option key={item + 1} value={item + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light" onClick={() => handleRemoveFromCart(item)}>
                        <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) Items</h2>
                    <p> ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button type="button" className="btn-block mb-2" variant="dark" disabled={cartItems.length === 0} onClick={handleCheckOut}>
                        Proceed to Checkout
                    </Button>
                    <Link to='/' className="mt-3">
                      <h6>Contiue Shoping</h6>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartPage;
