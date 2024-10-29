import React, { useState,useEffect } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import CardBook from './CardBook'
import { Link } from 'react-router-dom';
import Selector from './Selector';


const dataCategories = [
  {
    "name": "All",
    "independent": false
  },
  {
    "name": "Science",
    "independent": false
  },
  {
    "name": "Romance",
    "independent": false
  },
  {
    "name": "Mystery",
    "independent": false
  },
  {
    "name": "History",
    "independent": false
  },
  {
    "name": "Fantasy",
    "independent": false
  },]

const BooksSection = ({title,type,books}) => {
  const [show, setShow] = useState(false);
  const [categorie, setcategorie] = useState("")
  const [selected, setSelected] = useState("");
  const [b, setb] = useState(books.reverse())
  useEffect(() => {
    if(categorie==="All"|| !categorie){
      setb(books.reverse())

    
    }else{
      setb((books.reverse()).filter((item) => item.categorie === categorie));
    }

  
    
  }, [categorie,books])
  
  
  return (
    <div className='my-16'>
      <div className='flex justify-between my-8'>
        <h1 className='text-4xl font-bold ml-12'>{title}</h1>
        <div className="Categories text-[#5B7483] text-lg font-bold flex items-center gap-1 mr-20">
        <Selector  selected={categorie} setSelected={setcategorie}  title="Categories" data={dataCategories} />

        </div>
      </div>
      {b.length>0?(<div className='flex justify-center flex-wrap gap-8'>
        {show ? (
          b.map((item, index) => (
            <CardBook key={index} type={type} book={item} />
          ))
        ) : (
          b.slice(0, 5).map((item, index) => (
            <CardBook key={index} type={type} book={item} />
          ))
        )}
      </div>):(<div className='text-center text-6xl font-bold'>Not Found</div>)}
      <div className='flex flex-col mt-8 mr-20 font-bold text-xl'>
        <Link 
          className='self-end underline text-[#5B7483] tracking-wider'
          onClick={() => setShow(!show)}
        >
          {show ? 'Show Less' : 'Show More'}
        </Link>
      </div>
    </div>
  )
}

export default BooksSection
