import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Stepper from '../../components/Stepper'
const AddBook = () => {
  return (
    <div>
      <Header/>

      <div className="flex flex-col gap-10 h-screen items-center my-20">
      <Stepper />
      
    </div>



      <Footer/>
    </div>
  )
}

export default AddBook
