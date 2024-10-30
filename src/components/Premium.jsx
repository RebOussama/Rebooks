import React from 'react'
import { Link } from 'react-router-dom'

const Premium = () => {
  return (
    <div className="flex  justify-around bg-[url('./premium.png')] py-20">
      <p className='text-white tracking-wider font-inter text-3xl font-semibold leading-snug w-2/5'>Unlock the full potential of your reading experience with our exclusive premium plans</p>
      <Link to="/Membership" className='bg-[#5B7483] self-end font-jomolhari px-16 py-4 text-3xl tracking-wider font-thin rounded-[5px] text-white'>Join Now </Link>
    </div>
  )
}

export default Premium
