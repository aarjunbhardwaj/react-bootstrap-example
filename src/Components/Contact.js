import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
    return (
        <>
          <Container>
            <Row>
                <Col xs={8}>
                  <Card className="shadow-lg">
                    <Card.Header className="p-2" style={{backgroundColor:"orange"}}>
                    <h4>Contact Us </h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor:"#f7f5f0"}}>
                       <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>
                          Email  
                        </Form.Label>
                        <Form.Control type="Email" placeholder="Enter Your Email Address">
                        </Form.Control>
                        </Form.Group>
                         <Form.Group className="mb-3">
                          <Form.Label>
                            Enter Your Suggestion
                          </Form.Label>          
                          <Form.Control as="textarea" rows={3}/>                    
                         </Form.Group>
                       </Form>
                       <Button className="Primary" type="Submit"> Submit </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
              
               
                    <Card.Body>
                        <Card.Img style={{height:345 , width:345}} src="/Images/contact.jpg"/>
                    </Card.Body>
                
               
            </Col>
            </Row>
          </Container>
        </>
    )
}

export default Contact