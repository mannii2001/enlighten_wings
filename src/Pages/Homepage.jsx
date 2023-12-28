import React from 'react'
import Appointment from '../Components/ApoointmentForm/Appointment'
import Navbar from '../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import Facilities from '../Components/Facilities/Facilities'
import Footer from '../Components/Footer/Footer'
import Review from '../Components/ReviewsSection/Review'
import Classes from '../Components/Classes/Classes'

const Homepage = () => {
  
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Facilities/>
      <Classes/>
      <Appointment/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Homepage
