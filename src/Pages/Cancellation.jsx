import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Cancellation = () => {
  return (
    <>
      <Navbar/>
      <div className='shippingContainer'>
        <h2 className='shippingHeading'>Cancellation & Refund Policy</h2>
        <h4 className='shippingSubHeading'>Last updated on Sep 4th 2023</h4>
        <p className='shippingContent'>No cancellations & Refunds are entertained.</p>
     </div>
     <Footer/>
    </>
  )
}

export default Cancellation
