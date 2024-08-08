import { useParams, Link } from "react-router-dom";
import products from "../products";
import { Row, Col, ListGroup, Card, Image, Button } from "react-bootstrap";
import RatingStar from "../components/RatingStar";
import { FaArrowLeft } from "react-icons/fa";

function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const stock = product.countInStock > 0 ? "In Stock" : "Sold Out";
  return (
    <>
      <Link to="/">
        <Button variant="outline-dark" className="mb-3">
          <FaArrowLeft /> Go Back
        </Button>
      </Link>
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
                rating={product.rating}
                numReviews={product.numReviews}
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
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{stock}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  variant="dark"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetailsPage;
