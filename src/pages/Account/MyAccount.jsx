import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const MyAccount = () => {
  return (
    <div>
      <Header/>

      <div className='mt-20'>
        <h1 className='text-center text-4xl font-bold'>My Account</h1>
        <div className='flex mt-20'>
          <div className='basis-1/4  p-6 border-r-2'>
            <ul className='flex flex-col gap-8 text-center text-[#5B7483]'>
              <li className='font-bold cursor-pointer'>My Account</li>
              <li className='cursor-pointer'>Account Settings</li>
              <li className='cursor-pointer'><Link to="/MyBooks">My Books</Link></li>
              <li className='cursor-pointer'>Memberships</li>
              <li className='cursor-pointer'><Link to="/Wishlist">Wishlist</Link></li>
            </ul>
          </div>
          <div className='basis-3/4'>
            <h1 className='font-bold text-center'>This account has no default phone mobile number. <span className='underline cursor-pointer'>Add Mobile Phone Number.</span> </h1>
            <div className='w-full  flex flex-wrap'>
              <div className='w-2/5 h-44 flex flex-col gap-2 m-8 p-4 border-2'>
                <h1 className='font-bold text-xl'>My Books</h1>
                <p className='text-[#5B7483]'>Your sale collection</p>
                <button className='text-white py-2 w-full mt-8 bg-[#44B89D]'>Manage Address Book</button>
              </div>
              <div className='w-2/5 flex flex-col gap-2 m-8 p-4 border-2'>
                <h1 className='font-bold text-xl'>Account Settings</h1>
                <p className='text-sm'>Full Name: XXXXXX</p>
                <p className='text-sm'>Email Address: XXXXXXXX</p>
                <p className='text-sm'>Phone Number: XXXXXX</p>
                <p className='text-sm'>Content Settings: Show explicit content</p>
                <p className='text-sm'>Instant Purchase Settings: Active</p>

                <p className='text-[#5B7483]'>Manage Email Preferneces</p>
                <button className='text-white py-2 w-full mt-8 bg-[#44B89D]'>Manage Account Settings</button>
              </div>

              <div className='w-2/5 h-52 flex flex-col gap-2 m-8 p-4 border-2'>
                <h1 className='font-bold text-xl'>Memberships</h1>
                <p className='text-sm'>Enjoy even more benefits!</p>
                <p className='text-[#5B7483]'>Become a Premium Member</p>
                <button className='text-white py-2 w-full mt-8 bg-[#44B89D]'>Manage Memberships</button>
              </div>

              <div className='w-2/5 h-40 flex flex-col gap-2 m-8 p-4 border-2'>
                <h1 className='font-bold text-xl'>Wishlist</h1>
                <button className='text-white py-2 w-full mt-8 bg-[#44B89D]'>Manage Wishlist</button>
              </div>
                
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default MyAccount
