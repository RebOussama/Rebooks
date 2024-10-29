import React from 'react'
import { FaHeart } from "react-icons/fa";
import { BiSolidMessageDetail  } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";

const CardBookAudio = ({title,book,author,imgURL}) => {
  return (
    <div className='w-56  shadow-lg'>
      <div>
        <img className='w-full' src={imgURL} alt="" />
      </div>
      <div className='flex justify-center border-b-2 bg-[#D4E3EF] text-2xl font-semibold py-1'>
        <FaRegCirclePlay className='mt-1 mr-1' />
        Listen
      </div>
        
      <div className='flex justify-between my-2'>
        <div className='mx-2'>
          <h1 className='text-lg font-bold'>{title}</h1>
          <div className='text-[#5B7483]'>{author}</div>
        </div>
        
        <div className="flex icons text-[#44B89D] text-2xl ml-auto mr-4">
            <FaHeart/>

        </div>
        

      </div>


    </div>
  )
}

export default CardBookAudio