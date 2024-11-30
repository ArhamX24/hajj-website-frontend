import React from 'react'
import Navbar from './Navbar'
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
    <div className='h-hero-h w-full bg-black'>
    <div className='h-hero-h bg-hero-desktop w-full bg-cover bg-center bg-fixed bg-no-repeat opacity-70'>
      <div className='w-1/2 info-container z-50 text-white opacity-100 text-md lg:text-xl'>
        <p>Mail Us: example123@mail.com</p>
        <p className='my-2'>Contact Us: 1234567789</p>
        <p>WhatsApp Us: 1234567789</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
