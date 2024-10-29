import React from 'react'
import CardBookAudio from './CardBookAudio'

const BooksSectionAudio = ({title,books,author}) => {
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
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       <CardBookAudio imgURL={"../../../public/AudioPage/audiobooks/book1.png" } title={"Alone"} author={"JACK HARRISON"}/>
       
       
       
       
      </div>
    </div>
  )
}

export default BooksSectionAudio