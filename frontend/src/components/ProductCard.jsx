import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";

function ProductCard({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="card-image" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h5'>
            ${product.price}
        </Card.Text>
        <Card.Text>
          <RatingStar value={product.rating} numReviews={product.numReviews} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
