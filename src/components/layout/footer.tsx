import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const getFooterYear = () => new Date().getFullYear();

class Footer extends React.PureComponent {
  render() {
    return (
      <Container id="footer">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <span>&copy; {getFooterYear()} |</span>
            <span>
              <Link to="/">viswanathkgp12.herokuapp.com</Link>
            </span>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
