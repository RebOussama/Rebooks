import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSection from '../../components/HeaderSection'
import BooksSection from '../../components/BooksSection'
import BooksSubHeader from '../../components/BooksSubHeader'
import Subscribe from '../../components/Subscribe'
import BooksSectionAudio from '../../components/BooksSectionAudio'




const AudioBooks = () => {
  return (
    <div>
      <Header/>

      <BooksSubHeader imgUrl={"../../../public/AudioPage/card_img.png"} title={"AUDIOBOOKS"} description={"If you're attracted to the adventure of audiobooks but hesitate to dive in, Rebook offers you a unique opportunity to get your hands on your favorite audiobook by your favorite author!"}/>
      
      <Subscribe/>

      <BooksSectionAudio title=""/>

      <Footer/>
    </div>
  )
}

export default AudioBooks
