import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-wrap justify-start gap-10 ml-32'>
      <div className=" card font-bold tracking-wider font-inter text-white text-3xl flex justify-center items-end rounded-[10px] bg-[url('../../public/HomeImgs/Categories/1.png')] bg-no-repeat	bg-cover w-80 border-2 h-80">
          <p className='mb-10'>Poetry</p>
      </div>
      <div className=" card rounded-[10px] flex gap-6 flex-col justify-center items-center w-80 border-2 h-80">
          <p className='font-bold w-2/3 text-4xl text-[#173F5F] text-center'>Explore Top Categories</p>
          <button className='bg-[#283342] px-8 py-2 text-lg font-semibold rounded-[5px] text-white'>View All</button>
      </div>
      <div className=" card font-bold tracking-wider font-inter text-white text-3xl flex justify-center items-end rounded-[10px] bg-[url('../../public/HomeImgs/Categories/2.png')] bg-no-repeat	bg-cover w-80 border-2 h-80">
          <p className='mb-10'>Romance</p>
      </div>
      <div className=" card font-bold tracking-wider font-inter text-white text-3xl flex justify-center items-end rounded-[10px] bg-[url('../../public/HomeImgs/Categories/3.png')] bg-no-repeat	bg-cover w-80 border-2 h-80">
          <p className='mb-10'>Mystery</p>
      </div>
      <div className=" card font-bold tracking-wider font-inter text-white text-3xl flex justify-center items-end rounded-[10px] bg-[url('../../public/HomeImgs/Categories/4.png')] bg-no-repeat	bg-cover w-80 border-2 h-80">
          <p className='mb-10'>History</p>
      </div>
      <div className=" card font-bold tracking-wider font-inter text-white text-3xl flex justify-center items-end rounded-[10px] bg-[url('../../public/HomeImgs/Categories/5.png')] bg-no-repeat	bg-cover w-80 border-2 h-80">
          <p className='mb-10'>Fantasy</p>
      </div>
      
    </div>
  )
}

export default Categories
