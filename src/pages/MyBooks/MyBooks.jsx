import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MyBook from "../../components/MyBook"
import WishBook from "../../components/WishBook"

const MyBooks = () => {
    return (
      <div>
        <Header/>

        <p className="text-2xl mx-16 mt-10">Shopping Cart</p>

        <MyBook imgURL={"../../public/Wishlist/book.png"} title={"How to Walk Into a Room: The Art of Knowing When to Stay and When to Walk Away"} author={"Emily P. Freeman"} price={"32.00"}/>
        <MyBook imgURL={"../../public/Wishlist/book.png"} title={"How to Walk Into a Room: The Art of Knowing When to Stay and When to Walk Away"} author={"Emily P. Freeman"} price={"32.00"}/>
        <MyBook imgURL={"../../public/Wishlist/book.png"} title={"How to Walk Into a Room: The Art of Knowing When to Stay and When to Walk Away"} author={"Emily P. Freeman"} price={"32.00"}/>

        <div className="flex justify-center items-center ">
        <Link to="/Addbook" className="bg-[#1B1A32] text-white text-2xl py-3 px-6 rounded-lg">
            Add new book now
        </Link>
        </div>

        <Footer/>
      </div>
    )
  }
  
  export default MyBooks