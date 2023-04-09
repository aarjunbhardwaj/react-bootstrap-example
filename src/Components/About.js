import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <Card className='shadow-lg'>
              <Card.Img variant='top' src='/Images/about.jpg' />
            </Card>
          </Col>
          <Col xs={6}>
            <Card className='shadow-lg'>
              <Card.Title className='text-center fw-bold p-2' style={{backgroundColor:'orange'}}> About Us </Card.Title> 
              <Card.Body>
              <Card.Text>
              A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are <br/>
              A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About