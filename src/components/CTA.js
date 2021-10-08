import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div
      className='py-1'
      style={{ backgroundColor: 'white', maxWidth: '1800px', margin: 'auto' }}
    >
      <Row>
        <Col style={{ paddingLeft: '5rem', paddingTop: '3rem' }}>
          <h1 className='cta-title'>Let's get to work.</h1>
          <p>
            <span style={{ fontSize: '1.5rem' }} className='inline-block'>
              I help young athletes get game ready skills.
            </span>
          </p>

          <Link to='/contact'>
            <button to='/contact' className='btn'>
              <span>
                <strong>Set Up Session</strong>
              </span>
            </button>
          </Link>
        </Col>
        <Col md={6} style={{ paddingRight: '0', marginRight: '0' }}>
          <img src='images/bball.PNG' alt='basketball' />
        </Col>
      </Row>
    </div>
  );
};

export default CTA;
