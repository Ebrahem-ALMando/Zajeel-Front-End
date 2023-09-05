import React from 'react'
import Slider from "./SliderHome/Slider";
import Trips from "./Trips/Trips";
import Map from "./Map/Map";
import Contactus from "../Home/ContactUs/Contactus";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Slider/>
      <Trips/>
        <Map/>
        <Contactus/>
        <Footer/>
    </>
  )
}

export default Home