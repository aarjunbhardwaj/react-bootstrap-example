import React from 'react';
import {Navbar,NavbarBrand,Nav} from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <>
   
    <Navbar bg='dark' variant='dark' fixed='top'>
    <NavbarBrand href='/' style={{ marginLeft: "20px" }} > Design World </NavbarBrand>
    
    <Nav className='ml-auto'>

    <Nav.Link  href='/Services' style={{ color: 'white' }}>Services</Nav.Link>
    <Nav.Link  href='/about'    style={{ color: 'white' }}>About</Nav.Link>
    <Nav.Link  href='/contact'  style={{color:'white'}}>Contact Us</Nav.Link>
    <Nav.Link  href='/Login' style={{ color: 'white' }} >Login</Nav.Link>
    <Nav.Link  href='/register' style={{ color: 'white' }}>Register</Nav.Link>
</Nav>
    </Navbar>
    </>
  )
}

export default MyNavbar