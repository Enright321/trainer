import React from 'react';
import { Row, Col, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const HomeScreen = () => {
  return (
    <>
      <CTA />
      <Container>
        <h1 className='text-center py-3'>MY EXPERIENCE...</h1>

        <Row xs={1} sm={1} md={2}>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }}>
            <img
              style={{ width: '100%' }}
              src='/images/main1.JPG'
              alt='intro'
            />
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }}>
            <div
              className='d-flex text-center align-items-center'
              style={{ height: '100%' }}
            >
              <div className='sec-bg'>
                <strong>
                  <h2 className='text-center'>Matt Enright</h2>
                  <div className='text'>
                    I've been playing basketball for 14+ years, and have learned
                    the details from countless high level trainers and
                    experienced coaches. My goal is to pass all of this
                    information along, and help players master their game.
                  </div>
                </strong>
              </div>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2}>
          <Col className='cols' md={7}>
            <div
              className='d-flex text-center align-items-center'
              style={{ height: '100%' }}
            >
              <div className='sec-bg'>
                <strong>
                  <h2 className='text-center'>BACKGROUND</h2>
                  <div className='text'>
                    I started training players in my driveway during the summer
                    of 2020. It began with a few younger players coming up and
                    asking about some of the training I do during the offseason.
                    After some of these conversations, I began training and
                    demonstrating the drills I've learned over the years. Not
                    only do I want to continue to study all aspects of the game
                    for myself, but I also want to share what I learn to the
                    next group of players that come after me.
                  </div>
                </strong>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <img
              style={{ width: '100%' }}
              src='/images/main2.JPG'
              alt='background'
            />
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2}>
          <Col
            className='first'
            xs={{ span: 12, order: 2 }}
            md={{ span: 5, order: 1 }}
          >
            <img
              style={{ width: '100%' }}
              src='/images/main3.JPG'
              alt='achievements'
            />
          </Col>
          <Col
            className='cols'
            xs={{ span: 12, order: 1 }}
            md={{ span: 7, order: 2 }}
          >
            <div
              className='d-flex text-center align-items-center'
              style={{ height: '100%' }}
            >
              <div className='sec-bg' style={{ width: '50rem' }}>
                <strong>
                  <h2 className='text-center'>Achievements</h2>
                  <div className='text'>
                    <ul style={{ listStyle: 'none', paddingLeft: '0rem' }}>
                      <li>
                        4 year varsity player at Webster Groves High School.
                      </li>
                      <hr />
                      <li>
                        Back to back All District/1st team all Conference.
                      </li>
                      <hr />
                      <li>
                        Among area leaders in 3 pointers made for both sophomore
                        and junior seasons.
                      </li>
                      <hr />
                      <li>
                        Played in the Nike EYBL and for Michael Porter Jr.
                      </li>
                    </ul>
                  </div>
                </strong>
              </div>
            </div>
          </Col>
        </Row>

        <hr style={{ color: 'black' }} className='my-5 py-1' />
        <h1 className='text-center py-3'>TESTIMONIALS</h1>
        <CardGroup style={{ maxWidth: '1000px', margin: 'auto' }}>
          <Card className='home-card'>
            <Card.Img
              style={{ height: 'auto' }}
              className='testimonial-img'
              variant='top'
              src='images/test1.jpg'
              alt='training'
            />
            <Card.Body>
              <Card.Title className='text-center' style={{ color: '#f1f1f1' }}>
                NBA Trainer Drew Hanlen
              </Card.Title>
              <Card.Text
                className='text-center'
                style={{ color: '#f1f1f1', fontSize: '1.2rem' }}
              >
                "I've watched Matt relentlessly work on his game since he was in
                elementary school and am excited to see him pour that same
                energy and effort into the players he works with as a skills
                coach. Matt has a great understanding of how to get players
                better and is able to connect with players in a manner that will
                help them get results."
              </Card.Text>
            </Card.Body>
            <hr />
          </Card>
          <Card className='home-card'>
            <Card.Img
              style={{ height: 'auto' }}
              className='testimonial-img'
              variant='top'
              src='images/test2.jpg'
              alt='coach blossom'
            />

            <Card.Body>
              <Card.Title className='text-center' style={{ color: '#f1f1f1' }}>
                Coach Jay Blossom
              </Card.Title>
              <Card.Text
                className='text-center'
                style={{ color: '#f1f1f1', fontSize: '1.1rem' }}
              >
                "Matt Enright is one of the hardest working and most determined
                players I have ever coached. He is a student of the game and he
                has worked hard to develop a skill-set that very few players
                have. He has trained with elite trainers and coaches throughout
                his career. He has a great rapport with young players that
                allows him to get the absolute most out of those he trains. I
                highly recommend him for any player that wants to grow their
                game."
              </Card.Text>{' '}
            </Card.Body>
            <Card.Footer className='text-center'>
              <small>Photo by STL High School Sports - Randy Kemp</small>
            </Card.Footer>
            <hr />
          </Card>
        </CardGroup>
        <div className='center py-5'>
          <Link className='btn' to='/contact'>
            <strong> SET UP SESSION </strong>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HomeScreen;
