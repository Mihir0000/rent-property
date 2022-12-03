import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row className="py-3 shadow">
          <Col sm={3}>
            <div>
              <h4>Estatery</h4>
            </div>
          </Col>
          <Col sm={6}>
            <div className="d-flex justify-content-around">
              <div>Rent</div>
              <div>Buy</div>
              <div>Sell</div>
              <div>Manage Property</div>
              <div>Resource</div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="float-end">
              <Button className="bg-white text-dark border me-2">Login</Button>
              <Button className="mx-2">SignUp</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
