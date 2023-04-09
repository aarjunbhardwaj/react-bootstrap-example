import React from 'react';
import { Row,Col,Container, Card, Form, Button,Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
   <Container>
    <Row>
      <Col sm={6}>
        <Card shadow="sm">
        <Card.Header className='p-3' style={{backgroundColor:'orange'}}>
        <h4>Login</h4>  
        </Card.Header>
        <Card.Body style={{backgroundColor:"#f7f5f0"}}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control 
              type='Email' 
              placeholder='Enter Your Email'> 
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control 
              type='password' 
              placeholder='Enter Your Password'>

              </Form.Control>
            </Form.Group>
            <Form.Group className='mt-3'>
             <Button variant='warning' type='submit'>Login</Button>
            </Form.Group> 
          </Form>
          <Nav className='mt-3'>
          <Nav.Item>
            <Nav.Link as={Link} to="/Register">
             Don't have an account ? Register 
            </Nav.Link>
          </Nav.Item> 
          </Nav>
        </Card.Body>
        </Card>
      </Col>
      <Col sm={6}>
        <Image style={{height:"400px",width:"600px"}} src="/Images/login.jpg"/>
      </Col>
    </Row>
   </Container>    
       
    </>
  )
}

export default Login