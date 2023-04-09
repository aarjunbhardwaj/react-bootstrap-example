import { Carousel, Image, Container } from 'react-bootstrap'
import React from 'react';




const Slider = () => {
  return (
    <>
    
      <div >
        <Container className='mt-6'>
        <Carousel>
        <Carousel.Item >
          <Image style={{ height: 300, width: 1100, alignItems: 'center' }} src="/Images/first.jpg" />         
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>  
            </Carousel.Item> 
            <Carousel.Item >
          <Image style={{ height: 300, width: 1100, alignItems: 'center' }} src="/Images/second.jpg" />         
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>  
            </Carousel.Item> 
            <Carousel.Item >
          <Image style={{ height: 300, width: 1100, alignItems: 'center' }} src="/Images/third.jpg" />         
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>  
            </Carousel.Item> 
          </Carousel> 
        </Container>
      </div> 
    </>
  )
}

export default Slider