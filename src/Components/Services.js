import React from 'react'
import { Container, Row,Button, Col,Card } from 'react-bootstrap'

const Services = () => {
  return (
    <>
    <h1 className='text-center fw-bold my-5'> Our Services </h1>
      <Container >
        <Row>
         <Col xs={4}>
           <Card className='shadow-lg'>
           <Card.Img variant='top' style={{height:300 , width:350}} src='/Images/aew.jpg'/>
           <Card.Header className='p-2' style={{backgroundColor:'orange'}}>
             <h4 className='text-center fw-bold' > Animation </h4>
             </Card.Header>
             <Card.Body> 
             <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card> 
         </Col>
         <Col xs={4}>
           <Card className='shadow-lg'>
           <Card.Img variant='top' style={{height:300 , width:350}} src='/Images/stock.jpg'/>
           <Card.Header className='p-2' style={{backgroundColor:'orange'}}>
             <h4 className='text-center fw-bold'> Poster </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
              Some quick example text to build on the card title and make up the
          bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
           </Card> 
         </Col>
         <Col xs={4}>
           <Card className='shadow-lg'>
           <Card.Img style={{height:300 , width:350}} variant='top' src='/Images/services.jpg'/>
             <Card.Header className='p-2' style={{backgroundColor:'orange'}}>
             <h4 className='text-center fw-bold'> UI/UX </h4>
             </Card.Header>
             <Card.Body>
              <Card.Text>
              Some quick example text to build on the card title and make up the
          bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card> 
         </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Services