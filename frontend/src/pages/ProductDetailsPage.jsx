import { Link, useParams, useNavigate } from "react-router-dom";
import { Row, Col, ListGroup, Card, Image, Button, Form } from "react-bootstrap";
import RatingStar from "../components/RatingStar";
import { FaArrowLeft } from "react-icons/fa";
import { useGetSingleProductQuery } from "../slices/productsSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);

  const handleAddToCart = () => {
    dispatch(addToCart({...product, quantity}));
    navigate('/cart');
  }

  const stock = product?.countInStock > 0 ? "In Stock" : "Sold Out";
  return (
    <>
      <Link to="/">
        <Button variant="outline-dark" className="mb-3">
          <FaArrowLeft /> Go Back
        </Button>
      </Link>
      {
        isLoading ? (<Loader />) : error ? (<Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>) : <>
      <Row className="mt-5">
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Price:</strong> {product.price}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingStar
                value={product.rating}
                numReviews={product.reviews.length}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="mt-3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{stock}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {
                 stock === "In Stock" && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity:</Col>
                      <Col>
                        <Form.Control as='select' value={quantity} onChange={event => setQuantity(Number(event.target.value))}>
                          {
                           [...Array(product.countInStock).keys()].map( item => (
                            <option key={item + 1} value={item + 1}>{item + 1}</option>
                           ))
                          }
                        </Form.Control>      
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )
              }
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  variant="dark"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row></>
      }
    </>
  );
}

export default ProductDetailsPage;
