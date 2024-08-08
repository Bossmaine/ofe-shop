import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
            <Col className="text-center py-3">
                <p className="copyright-texts">&copy;{year} South Alias Ltd  | All rights reserved</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
