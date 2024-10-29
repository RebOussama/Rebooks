import { useState } from 'react'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';
import Membership from './pages/Membership/Membership';
import PDFBooks from './pages/PDF Books/PDFBooks';
import AudioBooks from './pages/AudioBooks/AudioBooks';
import AboutUs from './pages/About Us/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import AddBook from './pages/AddBook/AddBook';
import Help from './pages/Help/Help';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import ScrollToTop from './components/ScrollToTop';
import MyAccount from './pages/Account/MyAccount';
import Wishlist from './pages/Wishlist/Wishlist';
import MyBooks from './pages/MyBooks/MyBooks';


function App() {

  return (
    <div>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Marketplace" element={<Marketplace />}/>
        <Route path="/Membership" element={<Membership />}/>
        <Route path="/PDFBooks" element={<PDFBooks />}/>
        <Route path="/AudioBooks" element={<AudioBooks />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="/Help" element={<Help />}/>
        <Route path="/Terms" element={<Terms />}/>
        <Route path="/Privacy" element={<Privacy />}/>
        <Route path="/MyAccount" element={<MyAccount />}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/MyBooks" element={<MyBooks/>}/>


        <Route path="/AddBook" element={<AddBook />}/>




        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element= {<SignUp />} />
      </Routes>

      </ScrollToTop>

      
      
    </div>
  )
}

export default App
