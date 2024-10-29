import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Payment from '../../components/Payment';
import { FaArrowRight } from "react-icons/fa6";


const Membership = () => {
  const [activePlan, setactivePlan] = useState("Plus");


  return (
    <div>
      <Header />

      <div className='my-16 flex flex-col items-center'>
        <div className='w-4/5 flex flex-col gap-2 '>
          <h1 className='text-2xl font-bold'>Premium Membership</h1>
          <p>Upgrade your ReBooks experience with our premium membership options. Enjoy exclusive benefits and enhanced features designed to take your reading journey to the next level.</p>
          <h2 className='text-lg font-semibold'>Membership Plans:</h2>
          <p>Choose the plan that best suits your reading habits and preferences:</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='cards flex justify-center gap-12 my-12'>
            <div className="card relative  text-center w-80 h-[450px] shadow-xl rounded-xl p-3 border-2 border-gray-200 ">
              <h1 className='text-[#1B1A32] rounded-lg tracking-wide py-4 text-lg bg-[#44B89D] w-full px-2'>Standard Plan</h1>
              <div className='mt-10 flex flex-col gap-8'>
                <p className='border-b-2 py-2'>Access to the audiobook library</p>
                <p className='border-b-2 py-2'>Access to the pdfbook library</p>
              </div>
              <h1 className='absolute bottom-12 left-20'>Price: $X.XX per month</h1>


            </div>
            <div className="card relative  text-center w-80 h-[450px] shadow-xl rounded-xl p-3 border-2 border-gray-200 ">
              <h1 className='text-[#1B1A32] rounded-lg tracking-wide py-4 text-lg bg-[#44B89D] w-full px-2'>Plus Plan</h1>
              <div className='mt-10 flex flex-col gap-8'>
                <p className='border-b-2 py-2'>All features of the Standard Plan</p>
                <p className='border-b-2 py-2'>Enhanced search filters</p>
                <p className='border-b-2 py-2'>Priority customer support</p>

              </div>
              <h1 className='absolute bottom-12 left-20'>Price: $X.XX per month</h1>


            </div>
            <div className="card relative  text-center w-80 h-[450px] shadow-xl rounded-xl p-3 border-2 border-gray-200 ">
              <h1 className='text-[#1B1A32] rounded-lg tracking-wide py-4 text-lg bg-[#44B89D] w-full px-2'>Ultimate Plan</h1>
              <div className='mt-10 flex flex-col gap-8'>
                <p className='border-b-2 py-2'>All features of the Plus Plan</p>
                <p className='border-b-2 py-2'>Special discounts and deals</p>
                <p className='border-b-2 py-2'>Early access to new releases</p>

              </div>
              <h1 className='absolute bottom-12 left-20'>Price: $X.XX per month</h1>


            </div>
          </div>
          <div className='flex  w-[420px] items-center text-[#1B1A32]  h-16 border-[#44B89D] border-[1px] rounded-md'>
            <div onClick={() => setactivePlan("Standard")} className={activePlan === "Standard" ? 'px-2 w-1/3 h-full  flex justify-center items-center tracking-wider cursor-pointer bg-[#44B89D]' : 'px-2 w-1/3 h-full  flex justify-center items-center tracking-wider cursor-pointer '}>Standard Plan</div>
            <div onClick={() => setactivePlan("Plus")} className={activePlan === "Plus" ? 'px-2 w-1/3 h-full  flex justify-center items-center tracking-wider cursor-pointer bg-[#44B89D]' : 'px-2 w-1/3 h-full  flex justify-center items-center tracking-wider cursor-pointer '}>Plus Plan</div>
            <div onClick={() => setactivePlan("Ultimate")} className={activePlan === "Ultimate" ? 'px-2 w-1/3 h-full  flex justify-center items-center tracking-wider cursor-pointer bg-[#44B89D]' : 'px-2 w-1/3 h-full  flex justify-center items-center tracking-wider cursor-pointer '}>Ultimate Plan</div>
          </div>

        </div>

        <div className='flex justify-center w-full my-16'>
          <Payment />

          <div className='w-2/5 border-2  font-inter tracking-wide flex flex-col gap-4 p-8'>

            <div>
              <h1 className='text-lg font-semibold '>Order Summary</h1>
              <p className='text-md  '>It can help you manage and service orders before,<br></br>
during and after fulfilment.</p>
            </div>

            <div className='bg-[#44B89D] rounded-md p-8 pb-16 '>
              <p className=' mb-10'>A simple start for everyone</p>
              <h1><span className='text-5xl font-bold'>$xx.xx</span>/month</h1>


            </div>

            <div className='pb-2 border-b-2'>
              <div className='flex justify-between px-1 py-1'>
                <p >Subtotal</p>
                <p className='font-bold'>$85.99</p>

              </div>
              <div className='flex justify-between px-1 py-1'>
                <p >Tax</p>
                <p className='font-bold'>$4.99</p>

              </div>
            </div>
            <div className='flex justify-between px-1 py-1'>
                <p >Total</p>
                <p className='font-bold'>$90.98</p>

              </div>

              <button className='bg-[#44B89D] text-white p-2 rounded-md flex items-center justify-center gap-2'>Proceed with Payment <FaArrowRight/></button>

              <div>
              By continuing, you accept to our Terms of Services and Privacy Policy.
Please note that payments are non-refundable.
              </div>


          </div>

        </div>

        
       



       


      </div>


      <Footer />
    </div>
  )
}

export default Membership
