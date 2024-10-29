import Footer from "../../components/Footer"
import Header from "../../components/Header"
import WishBook from "../../components/WishBook"

const Wishlist = () => {
    return (
      <div>
        <Header/>

        <p className="text-2xl mx-16 mt-10">Shopping Cart</p>

        <WishBook imgURL={"../../public/Wishlist/book.png"} title={"How to Walk Into a Room: The Art of Knowing When to Stay and When to Walk Away"} author={"Emily P. Freeman"} price={"32.00"}/>
        <WishBook imgURL={"../../public/Wishlist/book.png"} title={"How to Walk Into a Room: The Art of Knowing When to Stay and When to Walk Away"} author={"Emily P. Freeman"} price={"32.00"}/>
        <WishBook imgURL={"../../public/Wishlist/book.png"} title={"How to Walk Into a Room: The Art of Knowing When to Stay and When to Walk Away"} author={"Emily P. Freeman"} price={"32.00"}/>

        <Footer/>
      </div>
    )
  }
  
  export default Wishlist