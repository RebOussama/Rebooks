import React from 'react'
import { MdAccountCircle,MdWorkspacePremium,MdContactSupport  } from "react-icons/md";



const HelpCards = () => {
  return (
    <div className='flex  flex-wrap justify-center gap-x-44 gap-y-20'>
        <div className='w-96 h-80 shadow-xl flex flex-col justify-center items-center gap-5 p-4 text-center'>
            <MdAccountCircle className='text-6xl font-bold text-[#283342]'/>
            <h1 className='text-3xl font-bold text-[#283342] tracking-wide'>Account Management</h1>
            <p className='text-md tracking-wider '>Manage your account settings, update your profile information</p>

        </div>
        <div className='w-96 h-80 shadow-xl flex flex-col justify-center items-center gap-5 p-4 text-center'>

        <MdWorkspacePremium className='text-6xl font-bold text-[#283342]'/>
            <h1 className='text-3xl font-bold text-[#283342] tracking-wide'>Premium Membership</h1>
            <p className='text-md tracking-wider '>Interested in becoming a premium member? Discover the benefits of premium membership, how to sign up, and how to access our exclusive audiobook library.</p>

        </div>
        <div className='w-96 h-80 shadow-xl flex flex-col justify-center items-center gap-5 p-4 text-center'>

        <MdAccountCircle className='text-6xl font-bold text-[#283342]'/>
            <h1 className='text-3xl font-bold text-[#283342] tracking-wide'>Policies and Guidelines</h1>
            <p className='text-md tracking-wider '>Learn about our privacy policy, terms of service, community guidelines, and other important policies that govern the use of our platform.</p>

        </div>
        <div className='w-96 h-80 shadow-xl flex flex-col justify-center items-center gap-5 p-4 text-center'>

        <MdContactSupport  className='text-6xl font-bold text-[#283342]'/>
            <h1 className='text-3xl font-bold text-[#283342] tracking-wide'>Contact Us</h1>
            <p className='text-md tracking-wider '>Need further assistance? Contact our customer support team for help with any questions or issues you may have.</p>

        </div>
      
    </div>
  )
}

export default HelpCards
