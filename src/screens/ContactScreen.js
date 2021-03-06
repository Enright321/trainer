import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const ContactScreen = () => {
  return (
    <Container style={{ paddingBottom: '1rem' }}>
      <h2
        className='center'
        style={{ paddingTop: '3rem', paddingBottom: '1rem' }}
      >
        WHERE TO REACH ME?
      </h2>

      <Row xs={1} md={2} className='g-4' fluid='true'>
        <Col>
          <Card className='contact-card'>
            <Card.Body className='socials'>
              <Card.Title className='text-center'>
                <span className='fs-1'>CELL PHONE</span>
              </Card.Title>
              <Card.Text className='text-center'>314-393-9424</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='contact-card'>
            <Card.Body className='socials'>
              <Card.Title className='text-center'>
                <span className='fs-1'>EMAIL</span>
              </Card.Title>
              <Card.Text className='text-center'>
                matt3enright@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='contact-card'>
            <Card.Body className='socials'>
              <Card.Title className='text-center'>
                <span className='fs-1'>INSTAGRAM</span>
              </Card.Title>
              <div className='center'>
                <a
                  className='btn-2'
                  href='https://www.instagram.com/EndureHoops/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <strong>VISIT INSTAGRAM</strong>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='contact-card'>
            <Card.Body className='socials'>
              <Card.Title className='text-center'>
                <span className='fs-1'>TWITTER</span>
              </Card.Title>
              <div className='center'>
                <a
                  className='btn-2'
                  href='https://twitter.com/EndureHoops'
                  target='_blank'
                  rel='noreferrer'
                >
                  <strong> VISIT TWITTER </strong>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
