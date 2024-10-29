import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleLine,RiArrowDownSLine,RiHeartLine,RiArrowUpSLine   } from "react-icons/ri";
import { TbLogin2 } from "react-icons/tb";

import { useState,useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import './dropdown.css'
import { useClickAway } from "@uidotdev/usehooks";
import { Books } from './../../public/books';


const Header = () => {
  const [drop, setdrop] = useState(false)
  const [searchValue, setsearchValue] = useState("")
  const [searchBooks, setsearchBooks] = useState([])
  useEffect(() => {
    if(!searchValue)
      {
        setsearchBooks([])

      }
    else{
      setsearchBooks(Books.filter((item)=>item.title.includes(searchValue)))
    }
    console.log(searchBooks)
  }, [searchValue])
  
  const ref = useClickAway(() => {
    setdrop(false);
  });
  return (
    <div className=' pb-8 shadow-md' >
      <div className='flex items-center'>
        <div className="logo w-2/12 mr-6 flex "><img src="./logo.png" className='w-[120px] mt-4' alt="" /></div>
        <form className='w-6/12 ' action="">
          <div className="search relative">
          <input type="search" onChange={(e)=>{setsearchValue(e.target.value)}} placeholder='Search By Title' className='w-full placeholder:font-bold p-1.5	 placeholder:text-[#5B7483] border-2 border-[#5B7483]' />
          <button className='bg-[#5B7483] py-1.5 px-3 text-white font-bold absolute right-0 h-10  text-3xl	'><AiOutlineSearch /></button>
          <div className='flex flex-col shadow-2xl w-full absolute top-10 bg-white' >
            <ul className='flex flex-col overflow-y-scroll max-h-80 '>
              {searchBooks.length>0?(searchBooks.map((item)=>(
              <li className='text-[#535365] tracking-wider text-sm p-3 hover:bg-gray-100 cursor-pointer border-b-2'><div className='flex justify-between'><p>{item.title}</p>
              <p>{item.adress}</p></div></li>

              ))):("")}
            </ul>
           </div>
        </div>
        </form>
        {localStorage.getItem("token")?<div className="Account flex items-center gap-2 text-lg text-[#283342] font-bold border-r-4 mx-3 border-[#636E7C] w-2/12">
          <div className='flex items-center gap-2 cursor-pointer' >
            <Link to="/MyAccount" className='flex items-center gap-2'>
              <RiAccountCircleLine className='text-xl'/>
              My Account
            </Link>
            {drop?<RiArrowUpSLine className='text-2xl self-end	' onClick={()=>{setdrop((prev)=>!prev)}}/>:<RiArrowDownSLine  className='text-2xl self-end	' onClick={()=>{setdrop((prev)=>!prev)}}/>}
          </div>

          {drop&&<div className='flex flex-col shadow-2xl dropDownProfile' ref={ref}>
            <ul className='flex flex-col '>
              <li className='text-[#535365] tracking-wider text-sm p-3 hover:bg-gray-100 cursor-pointer'>Manage Account</li>
              <li className='text-[#535365] tracking-wider text-sm p-3 hover:bg-gray-100 cursor-pointer'>My Books</li>
              <li className='text-[#535365] tracking-wider text-sm p-3 hover:bg-gray-100 cursor-pointer'>My Digital Library</li>
              <li className='text-[#535365] tracking-wider text-sm p-3 hover:bg-gray-100 cursor-pointer'>Messaging</li>
              <li onClick={()=>{
                localStorage.removeItem("token")
                location. reload()
              }} className='text-[#44B89D] underline border-t-2 p-3 py-2 hover:bg-gray-100 cursor-pointer'>Logout</li>
            </ul>
          </div>}
        </div>:
        (<div className="Account flex items-center gap-2 text-lg text-[#283342] font-bold border-r-4 mx-3  border-[#636E7C] w-1/12">
          <TbLogin2 className='text-xl' />
          
          <Link to="/login" >
           Login In
          </Link>
        </div>)}
        <Link to="/Wishlist" className="WishList flex items-center gap-2 text-lg text-[#283342] font-bold  mx-3 w-2/12">
          <RiHeartLine className='text-xl' />
          Wishlist
        </Link>
      </div>
      <nav>
        <ul className='flex  justify-center'>
          <li className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>Home</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/Marketplace" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>Marketplace</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/AudioBooks" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>AudioBooks</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/PDFBooks" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>PDF Books</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/Membership" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>Membership</NavLink></li>
          <li className='px-14' ><NavLink to="/AboutUs" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>About Us</NavLink></li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Header
