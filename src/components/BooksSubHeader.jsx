
import React from 'react';

const BooksSubHeader= ({imgUrl, title, description}) => {
  return (
    <div className="border-t mt-6">
      <img className="mb-4 mt-4" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src={imgUrl} alt=""/>
      <h1 className="text-center font-bold text-4xl text-custom-dark-grey">{title}</h1>
      <p className='text-center text-custom-dark-grey mx-40 mt-8 font-bold text-1.2xl'>{description}</p>
    </div>
  );
};

export default BooksSubHeader;

