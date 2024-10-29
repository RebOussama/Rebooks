import React from 'react'
import { FaHeart } from "react-icons/fa";
import { BiSolidMessageDetail  } from "react-icons/bi";


const CardBook = ({type,book}) => {
  return (
    <div className='w-56  shadow-lg'>
      <img className='w-full ' src={book.imgUrl} alt="" />
      <div className='flex justify-around items-center border-b-2'>
        <div className='flex flex-col'>
            <h1 className='text-lg font-bold'>{book.title}</h1>
            <p>{book.adress}</p>
        </div>
        <div className='text-[#5B7483] text-center text-lg font-bold w-1/3'>
            {type ==="Sale" ?book.price+"DA":"For Exchange"}
        </div>
      </div>
      <div className='flex justify-around my-2'>
        <button className="bg-[#44B89D] text-white font-semibold tracking-widest px-6 py-2 rounded-lg flex items-center gap-1">Contact <BiSolidMessageDetail  className='mt-1 text-xl'/></button>
        <div className="flex items-center icons text-[#44B89D] text-3xl  ">
            <FaHeart/>

        </div>
        
      </div>


    </div>
  )
}

export default CardBook
