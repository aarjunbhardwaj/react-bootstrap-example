import React from 'react'
import MyNavbar from './MyNavbar';
import Slider from './Slider';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import FooterWeb from './FooterWeb';

const Home = () => {
  return (
    <>
    <MyNavbar/>
    <Slider/>
    <Services/>
    <About/>
    <Contact/>
    <FooterWeb/>
    </>
  )
}

export default Home