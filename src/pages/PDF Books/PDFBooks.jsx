import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BooksSubHeader from '../../components/BooksSubHeader'
import Subscribe from '../../components/Subscribe'
import BooksSectionPDF from '../../components/BooksSectionPDF'

const PDFBooks = () => {
  return (
    <div>
      <Header/>

      <BooksSubHeader imgUrl={"../../../public/PDFPage/PDF_img.png"} title={"PDF BOOKS"} description={"Welcome to REBOOKS! If you're intrigued by the world of digital reading but haven't quite embarked on the journey, we invite you to explore your favorite books in PDF format from cherished authors!"}/>

      <Subscribe/>

      <BooksSectionPDF title=""/>

      <Footer/>
    </div>
  )
}

export default PDFBooks
