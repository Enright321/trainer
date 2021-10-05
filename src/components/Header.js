import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar id='navbar' expand='sm'>
        <Container className='p-1'>
          <div style={{ border: 'solid 1px white', padding: '1rem' }}>
            <LinkContainer to='/'>
              <Navbar.Brand id='brand'>
                ENDURE HOOPS <i className='fas fa-basketball-ball'></i>
              </Navbar.Brand>
            </LinkContainer>
            <hr
              style={{
                color: 'white',
                padding: '0px',
                marginBottom: '.3rem',
                marginTop: '0rem',
              }}
            />
            <p id='slogan' className=' text-center'>
              Outwork. Persevere. Get Results.
            </p>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <div id='link'>
                    <i className='fas fa-home icon'>
                      <span style={{ padding: '.3rem' }}>HOME</span>
                    </i>
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <div id='link'>
                    <i
                      className='
                  fas fa-user icon'
                    >
                      <span style={{ padding: '.3rem' }}>CONTACT</span>
                    </i>
                  </div>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
