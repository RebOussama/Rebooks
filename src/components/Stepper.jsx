import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Selector from './Selector'
import { FaRegUserCircle } from "react-icons/fa";
import { Books } from './../../public/books';
import axios from "axios";

const dataCategories = [
  {
    "name": "science",
    "independent": false
  },
  {
    "name": "romance",
    "independent": false
  },
  {
    "name": "mystery",
    "independent": false
  },
  {
    "name": "history",
    "independent": false
  },
  {
    "name": "fantasy",
    "independent": false
  },]

const dataType = [{
  "name": "Sale",
  "independent": false
},
{
  "name": "Exchange",
  "independent": false
},]

const Stepper = () => {
  const steps = ["Book Info", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const [title, settitle] = useState("")
  const [categorie, setcategorie] = useState("")
  const [type, settype] = useState("")
  const [price, setprice] = useState("")

  const [description, setdescription] = useState("")
  const [adress, setadress] = useState("")
  const [tel, settel] = useState("")
  const [selected, setSelected] = useState("");

  let handleSubmit = async(e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  
    console.log(title);
    console.log(categorie);
    console.log(type);
    console.log(price)
    console.log(description);
    console.log(adress);
    console.log(tel);
        try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addbook/",
        {
          name: title,
          category: categorie,
          type: type,
          price: price,
          description: description,
          address: adress,
          phone_number: tel,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setCurrentStep((prev) => prev + 1);
  };




  

  
 
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
              } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>






      <form onSubmit={handleSubmit} className="flex flex-col  w-1/2 gap-4">
        {currentStep === steps.length ? (
          <div className="border-2 p-4 rounded-2xl shadow-xl w-full z-20 h-96 flex flex-col gap-4 justify-center items-center text-5xl font-bold">
             <h1>Payment coming soon...</h1>

          </div>) : (

          <div className="border-2 p-4 rounded-2xl shadow-xl w-full z-20  flex flex-col gap-4">

            <div className="flex gap-4 items-center">
              <FaRegUserCircle className="text-4xl"/>
              <h1 className="text-2xl font-bold">Username</h1>
            </div>


            <div>
              <input required onChange={(e)=>settitle(e.target.value)} value={title}   type="text" className="w-full border-2 rounded-lg p-2" placeholder="Name of the book" />

            </div>


            <div>
              <Selector  selected={categorie} setSelected={setcategorie}  title="Categories" data={dataCategories} />
            </div>

            <div>
              <Selector selected={type} setSelected={settype} title="For what ?" data={dataType} />
            </div>


            <div className={type=="Sale" ?"":"hidden"}>
              <input  onChange={(e)=>setprice(e.target.value)} value={price}   type="number" className="w-full  border-2 rounded-lg p-2" placeholder="Price " />

            </div>

            

            <div>
              <input required onChange={(e)=>setdescription(e.target.value)} value={description} type="text" className="w-full border-2 rounded-lg p-2" placeholder="Description" />

            </div>
            <div>
              <input required onChange={(e)=>setadress(e.target.value)} value={adress} type="text" className="w-full border-2 rounded-lg p-2" placeholder="Adress" />

            </div>
            <div>
              <input required onChange={(e)=>settel(e.target.value)} value={tel} type="tel" className="w-full border-2 rounded-lg p-2" placeholder="N° telephone" />
              
            </div>

            <div>
            <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text[#283342]
      hover:file:bg-violet-100
    "/>
  </label>
            </div>

          </div>




        )}
        <div className="flex justify-between">
          {currentStep === steps.length && !complete && (
            <button
              className='bg-[#283342] px-8 py-2 text-lg font-semibold rounded-[5px]  w-36 text-white btn'
              onClick={() => {
                currentStep === steps.length
                  ? setCurrentStep((prev) => prev - 1)
                  : "";
              }}
            >
              Back
            </button>
          )}
          {currentStep === steps.length ? "" : <div></div>}

          {!complete && (

            <button type="submit"
              className='bg-[#283342] px-8 py-2 text-lg font-semibold rounded-[5px] text-white w-36   btn'
              onClick={() => {
                currentStep === steps.length

                  ? setComplete(true)
                  : "";
              }}
            >
              {currentStep === steps.length ? (<Link to="/Marketplace">Finish</Link>) : "Next"}
            </button>
          )}
        </div>


      </form>

    </>
  );
};

export default Stepper;