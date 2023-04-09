import React from 'react';
import  './Components/Style.css';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Register from './Components/Register';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import MyNavbar from './Components/MyNavbar';
import Login from './Components/Login';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <>
    <Container>
    <MyNavbar/>
     <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services}/>
        <Route path='/register' Component={Register}/>
        <Route path="/contact" Component={Contact} />
        <Route path='/login' Component={Login}/>
      </Routes>
      </Container>
    </>
  )
}

export default App