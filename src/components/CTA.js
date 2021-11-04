import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='py-5' id='cta'>
      <Row>
        <Col>
          <h1 className='cta-title'>Let's get to work.</h1>
          <p>
            <span style={{ fontSize: '1.5rem' }} className='inline-block'>
              I help athletes get game ready skills.
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
      </Row>
    </div>
  );
};

export default CTA;
