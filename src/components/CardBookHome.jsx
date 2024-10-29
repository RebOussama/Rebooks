import React from 'react'

const CardBookHome = ({book}) => {
  return (
    <div className='w-40	'>
      <img src={book.imgUrl} alt="" />
      <p className='font-inter mt-2 ml-2 text-sm'>{book.title}</p>
      <p className='font-inter mt-2 ml-2 text-sm'>{book.author}</p>

    </div>
  )
}

export default CardBookHome

