import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <Header/>

      {/* About Us Section */}
      <div className="flex flex-col justify-center items-center gap-4 my-14 bg-[url('./a1.png')] h-[550px] text-[#262F3B]">
        <h1 className='text-5xl font-bold tracking-wider font-inter text-[#44B89D]'>About Us</h1>
        <p className='text-xl text-center font-inter tracking-wider w-2/5 font-semibold '>Welcome to Rebook, your premier destination for buying and exchanging books in Algeria. We are passionate about fostering a thriving reading community by providing a convenient platform for book enthusiasts to connect, exchange ideas, and discover new literary treasures.</p>
      </div>

      <div className="flex  mt-20">
        <div className='flex flex-col w-1/2 items-center gap-4   h-[550px] text-[#262F3B]'>
           <h1 className='text-5xl  font-bold tracking-wider font-inter'>Our mission</h1>
           <p className='text-xl text-center  font-inter w-3/5 tracking-widest font-semibold '>At Rebook, our mission is to promote literacy and a love for reading by making books more accessible to everyone in Algeria. We believe that books have the power to inspire, educate, and entertain, and we are dedicated to creating a space where book lovers can come together to explore diverse genres and authors.</p>
        </div>
        <div className=''>
           <img className='w-[570px] h-[350px]' src="./a2.jpg" alt="" />
        </div>
      </div>

      <div className="flex items-center">
        
        <div className='w-1/2 ml-20 self-start'>
           <img className='w-[570px] h-[350px]' src="./a3.png" alt="" />
        </div>
        <div className='flex flex-col w-1/2 items-center gap-4   h-[550px] text-[#262F3B]'>
           <h1 className='text-5xl  font-bold tracking-wider font-inter'>Who we are</h1>
           <p className='text-xl text-center  font-inter w-4/5 tracking-wider font-semibold '>we're a dedicated team of students and passionate book lovers committed to fostering a thriving reading community in Algeria. Understanding the challenges of accessing quality reading material, we've created a platform that not only facilitates book exchanges but also cultivates a sense of belonging among fellow enthusiasts. Through [Platform Name], we aim to empower students and book lovers alike by providing a convenient space to exchange books, discover new authors, and connect with like-minded individuals. Join us today and be part of a community that celebrates the transformative power of literature.</p>
        </div>
      </div>

      <Footer/>


    </div>
  )
}

export default AboutUs
