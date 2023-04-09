import React, { useState } from 'react';
import {Container,Row,Col,Card, Form, Button,Image,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Register = () => {
    let [state,setState] = useState({
        user : {
          username : '',
          email : '',
          password : '',
        }
      });
    
      let updateInput = (e) => {
         setState({
          ...state,
           user : {
             ...state.user,
             [e.target.name] : e.target.value
           }
         })
      };
      
      let register = (e) => {
        e.preventDefault();
        console.log(state.user);
      };
  return (
    <>
        <Container>
        <Row className='justify-content-center'>
          <Col sm={6}>
          <Card className='shadow-sm'>
            <Card.Header className='p-3' style={{backgroundColor:'orange'}}>
             <h4> Register </h4> 
            </Card.Header>
            <Card.Body style={{backgroundColor:"#f7f5f0"}}>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Control 
                  name = "username"
                  onChange={updateInput}
                  type='text' placeholder='username'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control
                  name = "email"
                  onChange={updateInput}
                   type='Email' placeholder='email'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                <Form.Control 
                name="password"
                onChange={updateInput}
                type='password' placeholder='Password'></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                  <Button onClick={register} variant='warning'type='submit'> Register </Button>
                </Form.Group>
              </Form>
              
              <Nav className='mt-3'>
                <Nav.Item>
                  <Nav.Link as={Link} to="/Login">
                  Already have an account? Log In 
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
          <Image src ="/Images/signup.jpg" style={{height:'400px',width:'500px'}}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register