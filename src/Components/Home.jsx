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
    {/* Contact Us Form Section */}
    <div className='h-full w-full form bg-primary p-5 lg:p-2'>
      <h2 className='text-center text-2xl md:text-3xl lg:text-3xl text-white mt-2'>Give Us Details Here</h2>
      <h1 className='text-center text-3xl md:text-5xl lg:text-5xl my-5 text-form-title font-bold'>Book Your Umrah Package</h1>
      <form action="#" className='w-11/12 lg:w-4/5 lg:flex justify-evenly items-center flex-wrap'>
      <div className='flex flex-col items-start w-full lg:w-30%'>
      <label className='text-white text-lg my-2'>Full Name</label>
      <input required type="text" name="fullname" id="fullname" placeholder='Full Name' className='placeholder-dark px-4 py-3 text-lg rounded-md text-black outline-none border-none w-full '/>
      </div>
      <div className='flex flex-col items-start w-full lg:w-30%'>
      <label className='text-white text-lg my-2'>Contact</label>
      <input required type='number' name="contact" id="contact" placeholder='Contact' className='placeholder-dark px-4 py-3 text-lg rounded-md text-black outline-none border-none w-full '/>
      </div>
      <div className='flex flex-col items-start w-full lg:w-30%'>
      <label className='text-white text-lg my-2'>Email</label>
      <input required type="email" name="email" id="email" placeholder='Email' className='placeholder-dark px-4 py-3 text-lg rounded-md text-black outline-none border-none w-full '/>
      </div>
      <div className='flex flex-col items-start w-full lg:w-30%'>
      <label className='text-white text-lg my-2'>Date</label>
      <input required type="date" name="date" id="date" placeholder='dd/mm/yy' className='placeholder-dark px-4 py-3 rounded-md text-black outline-none border-none w-full '/>
      </div>
      <div className='flex flex-col items-start w-full lg:w-30%'>
      <label className='text-white text-lg my-2'>Makkah Nights</label>
      <select name="makkahNights" id="makkahNights" className='placeholder-dark px-4 py-3 rounded-md text-black outline-none border-none w-full ' >
      <option>Makkah Nights</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
      </select>
      </div>
      <div className='flex flex-col items-start w-full lg:w-30%'>
      <label className='text-white text-lg my-2'>Madina Nights</label>
      <select name="madinaNights" id="madinaNights" className='placeholder-dark px-4 py-3 rounded-md text-black outline-none border-none w-full ' >
      <option>Madina Nights</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
      </select>
      </div>
      <div className='flex flex-col items-start w-full lg:w-11/12'>
        <label className='text-white text-lg my-2'>Write Your Enquiry</label>
        <textarea name="enquiry" id="enquiry" placeholder='Ask your Question Here' className='placeholder-dark p-2 text-lg lg:h-20 text-wrap rounded-md text-black outline-none border-none w-full' />
      </div>
      <input type="submit" className='px-10 py-2 text-lg cursor-pointer border-primary border rounded-lg transition-all duration-500 ease-out bg-form-btn hover:text-white my-5'></input>
      </form>
    </div>
    </>
  )
}

export default Home
