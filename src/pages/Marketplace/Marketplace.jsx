import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderSection from "../../components/HeaderSection";
import BooksSection from "../../components/BooksSection";
import { Books } from "./../../../public/books";

const Marketplace = () => {
  const [OnSale, setOnSale] = useState([]);
  const [ForExchange, setForExchange] = useState([]);

  useEffect(() => {
    setOnSale(Books.filter((item) => item.type === "Sale"));

    setForExchange(Books.filter((item) => item.type === "Exchange"));
  }, [Books]);

  return (
    <div>
      <Header />

      <div className="my-24">
        {/* Header Section */}
        <HeaderSection
          title="Marketplace"
          AddTitle="Add Book"
          AddLink="/Addbook"
        />

        {/* On Sale Section */}

        <BooksSection title="On Sale" type="Sale" books={OnSale} />

        {/* For Exchange Section */}

        <BooksSection
          title="For Exchange"
          type="Exchange"
          books={ForExchange}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
