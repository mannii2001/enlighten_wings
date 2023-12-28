import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Shipping = () => {
  return (
    <>
     <Navbar/> 
     <div className='shippingContainer'>
        <h2 className='shippingHeading'>Shipping & Delivery Policy</h2>
        <h4 className='shippingSubHeading'>Last updated on Sep 4th 2023</h4>
        <p className='shippingContent'>Shipping is not applicable for business.</p>
     </div>
     <Footer/>
    </>
  )
}

export default Shipping
