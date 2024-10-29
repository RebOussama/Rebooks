import React from 'react'
import { FaLinkedin ,FaFacebookSquare ,FaInstagramSquare ,FaTwitterSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex  justify-center gap-20 py-16 border-t-2 mt-36'>
      <div className='basis-1/5'>
        <img className='w-16 ml-4' src="./logo3.png" alt="" />
        <p className='text-[#173F5F]'>We are a group of book lovers and our endeavor has always been to come up with world class products in the books and publishing space.</p>
      </div>
      <div className='flex flex-col gap-5 basis-1/6'>
        <h1 className='text-[#283342] text-2xl font-bold font-inter'>COMPANY</h1>
        <ul>
            <li className='text-[#173F5F] text-lg font-semibold font-inter'><Link to="/AboutUs">About us</Link></li>
            <li className='text-[#173F5F] text-lg font-semibold font-inter'><Link to="/Terms" >Terms</Link></li>
            <li className='text-[#173F5F] text-lg font-semibold font-inter'><Link to="/Privacy">Privacy</Link></li>
            <li className='text-[#173F5F] text-lg font-semibold font-inter'><Link to="/Help" >Help</Link></li>
            <li className='text-[#173F5F] text-lg font-semibold font-inter'><Link to="/ContactUs" >Contact us</Link></li>
        </ul>

      </div>
           
      <div className='flex flex-col gap-5 basis-1/5'>
      <h1 className='text-[#283342] text-2xl font-bold font-inter'>CONNECT</h1>
            <div className='flex gap-5 text-3xl '>
              <FaFacebookSquare className='opacity-50 hover:opacity-100  cursor-pointer'/>
              <FaInstagramSquare className='opacity-50 hover:opacity-100 cursor-pointer'/>
              <FaLinkedin className='opacity-50 hover:opacity-100 cursor-pointer'/>
              <FaTwitterSquare className='opacity-50 hover:opacity-100 cursor-pointer'/>

            </div>
      </div>
    </div>
  )
}

export default Footer
