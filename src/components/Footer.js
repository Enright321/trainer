import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='py-3'>
      <Container>
        <Row>
          <Col className='text-center py-3' style={{ color: 'black' }}>
            Copyright &copy; Endure Hoops
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
