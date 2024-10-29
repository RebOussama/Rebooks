import React from 'react'
import CardBookPDF from './CardBookPDF'

const BooksSectionPDF = ({title,books,author,imgURL}) => {
  return (
    <div className='my-16'>
      <div className='flex justify-between my-8'>
        <h1 className='text-4xl text-custom-dark-grey font-bold ml-12 '>Bibliography :</h1>
      </div>
      <div className='flex justify-center flex-wrap gap-8'>
{/* {(books.reverse()).map((item)=>{
    return(
        item.categorie===title ? <CardBook/>:""
    )
})} */}
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       <CardBookPDF imgURL={"../../../public/PDFPage/PDFbook.png" }title={"HARRY POTTER"} author={"J.K.ROWLING"}/>
       
       
       
       
      </div>
    </div>
  )
}

export default BooksSectionPDF