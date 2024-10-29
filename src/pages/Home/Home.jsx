import React from 'react'
import Header from '../../components/Header'
import CardBookHome from './../../components/CardBookHome';
import BooksSlide from '../../components/BooksSlide';
import Categories from '../../components/Categories';
import Premium from '../../components/Premium';
import Footer from '../../components/Footer';


const BooksOnSale=[
  {title:"The Teacher ",author:"Freida Mcfadden",imgUrl:"../../../public/HomeImgs/BooksOnSale/1.png"},
  {title:"The Women ",author:"Kristin Hannah",imgUrl:"../../../public/HomeImgs/BooksOnSale/2.png"},
  {title:"Dune ",author:"Frank Herbert",imgUrl:"../../../public/HomeImgs/BooksOnSale/3.png"},
  {title:"The Teacher ",author:"Freida Mcfadden",imgUrl:"../../../public/HomeImgs/BooksOnSale/1.png"},
  {title:"The Women ",author:"Kristin Hannah",imgUrl:"../../../public/HomeImgs/BooksOnSale/2.png"},
  {title:"Dune ",author:"Frank Herbert",imgUrl:"../../../public/HomeImgs/BooksOnSale/3.png"},
  {title:"The Teacher ",author:"Freida Mcfadden",imgUrl:"../../../public/HomeImgs/BooksOnSale/1.png"},
  {title:"The Women ",author:"Kristin Hannah",imgUrl:"../../../public/HomeImgs/BooksOnSale/2.png"},
  {title:"Dune ",author:"Frank Herbert",imgUrl:"../../../public/HomeImgs/BooksOnSale/3.png"},


]
const BooksForExchange=[
  {title:"What Do You Really Want",author:"Cayla Craft",imgUrl:"../../../public/HomeImgs/BooksForExchange/1.png"},
  {title:"I Cheerfully Refuse",author:"Leif Enger",imgUrl:"../../../public/HomeImgs/BooksForExchange/2.png"},
  {title:"TRESS OF THE EMERALD SEA",author:"Brandon Sanderson",imgUrl:"../../../public/HomeImgs/BooksForExchange/3.png"},
  {title:"What Do You Really Want",author:"Cayla Craft",imgUrl:"../../../public/HomeImgs/BooksForExchange/1.png"},
  {title:"I Cheerfully Refuse",author:"Leif Enger",imgUrl:"../../../public/HomeImgs/BooksForExchange/2.png"},
  {title:"TRESS OF THE EMERALD SEA",author:"Brandon Sanderson",imgUrl:"../../../public/HomeImgs/BooksForExchange/3.png"},
  {title:"What Do You Really Want",author:"Cayla Craft",imgUrl:"../../../public/HomeImgs/BooksForExchange/1.png"},
  {title:"I Cheerfully Refuse",author:"Leif Enger",imgUrl:"../../../public/HomeImgs/BooksForExchange/2.png"},
  {title:"TRESS OF THE EMERALD SEA",author:"Brandon Sanderson",imgUrl:"../../../public/HomeImgs/BooksForExchange/3.png"},

]
const Home = () => {
  return (
    <div>
      <Header/>
      
      {/* Hero Section */}

      <div className="flex bg-[#597280] mt-14  p-6 items-center">
        <div className="leftSection text-5xl	font-semibold	text-white w-1/2 p-28 font-poppins tracking-widest		leading-relaxed		">
            Buy, Sell And Exchange Book Now!
        </div>
        <div className="rightSection">
            <img src="../../../public/HomeImgs/Hero.png" alt="" />
        </div>
      </div>
      {/* Books On Sale Section */}
      <BooksSlide title="Books On Sale" books={BooksOnSale}/>

      {/* Books For Exchange Section */}
      <BooksSlide title="Books For Exchange" books={BooksForExchange}/>
      
      {/* Categories Section */}

      <Categories/>

      {/* SellYourBook Section */}

      <div className="flex justify-around items-center bg-[#1A1A32] my-14">
        <p className="text-[#FFF3E1] font-jomolhari text-5xl w-72 leading-normal tracking-widest	">Sell Your Book Now </p>
        <img src="../../../public/HomeImgs/SellYourBookNow.png" className='w-[485px] h-[250px] my-16' alt="" />
      </div>

      {/* Premium Section */}
      <Premium />

      {/* Footer Section */}

       <Footer/> 



    </div>
  )
}

export default Home
