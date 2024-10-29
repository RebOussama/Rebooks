import React from 'react'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardBookHome from './CardBookHome';

const BooksSlide = ({title,books}) => {
  return (
    <div className="my-14">
      <div className="flex justify-between">
        <h1 className="text-4xl font-black ml-32 font-inter text-[#1B1A32] ">{title}</h1>
        <Link className="self-end font-inter mr-32 underline text-lg font-extrabold text-[#5B7483]" to="/Marketplace">See All</Link>
      </div>
      <div className=' my-8 pl-32'>
      <Splide 
      options={ {
        focus  : 0,
        omitEnd: true,
        rewind: false,
        gap   : '1rem',
        perPage: 5,
  
      } }
      aria-label="My Favorite Images"
    >
      
      {books.map((item)=>{
        return (
      <SplideSlide>
        <CardBookHome book={item}/>
      </SplideSlide>
        )
      })}
      
    </Splide>

      </div>
    </div>
  )
}

export default BooksSlide

