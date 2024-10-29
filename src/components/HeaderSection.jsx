import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const HeaderSection = ({title,AddTitle,AddLink}) => {
  const navigate = useNavigate();

  const test=()=>{
    if(localStorage.getItem("token")){
      navigate(AddLink)
    }else{
      navigate("/login")

    }
  }
  return (
    <div>
      <div className='flex justify-around pb-6 border-b-2'>
          <div></div>
          <h1 className='text-[#1A1A32] text-5xl font-bold'>{title} </h1>
          <button onClick={test} className='bg-[#5B7483] self-end font-jomolhari px-8 py-2 text-xl tracking-wider font-thin rounded-[5px] text-white'>{AddTitle} </button>

        </div>
    </div>
  )
}

export default HeaderSection
