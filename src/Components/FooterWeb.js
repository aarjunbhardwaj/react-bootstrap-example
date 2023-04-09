import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const FooterWeb = () => {
  return (
    <>
      <footer className='bg-dark text-light'>
        <Container>
          <Row>
            <Col>
                <h4> Design World </h4>
                <p> 21, KV Colony </p>
                <p> Mumabai 132321, India </p>
            </Col>
            <Col>
              <h4> Follow Us </h4>
              <ul className='list-unstyled'> 
              <li><a href='/'> Facebook </a></li>
              <li><a href='/about'> Twitter </a></li>
              <li><a href='/Services'>Youtube</a></li>
              </ul>
            </Col>
            <Col>
              <h4>Contact Us</h4>
              <p>Email: Designworld@designworld.com</p>
              <p>Phone: (+91) 943443032</p>
            </Col>
          </Row>
        </Container>
      </footer> 
    </>
  )
}

export default FooterWeb