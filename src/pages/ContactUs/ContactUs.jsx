import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaMessage } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin ,FaFacebookSquare ,FaInstagramSquare ,FaTwitterSquare  } from "react-icons/fa";
import Accordion from '../../components/Accordion';

const FAQ=[{
    question:"How do I buy a book on ReBooks?",
    answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a ducimus nisi recusandae esse inventore repudiandae! Nam quo, consectetur ratione dolorem amet commodi nemo explicabo ut ad iusto laudantium inventore!"
},
{
    question:"How do I sell or exchange a book on ReBooks?",
    answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a ducimus nisi recusandae esse inventore repudiandae! Nam quo, consectetur ratione dolorem amet commodi nemo explicabo ut ad iusto laudantium inventore!"
},{
    question:"What are the shipping costs for buying or exchanging books?",
    answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a ducimus nisi recusandae esse inventore repudiandae! Nam quo, consectetur ratione dolorem amet commodi nemo explicabo ut ad iusto laudantium inventore!"
},{
    question:"How can I become a premium member and access the audiobook library?",
    answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a ducimus nisi recusandae esse inventore repudiandae! Nam quo, consectetur ratione dolorem amet commodi nemo explicabo ut ad iusto laudantium inventore!"
},{
    question:"How do I contact customer support for assistance?",
    answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a ducimus nisi recusandae esse inventore repudiandae! Nam quo, consectetur ratione dolorem amet commodi nemo explicabo ut ad iusto laudantium inventore!"
},]

const ContactUs = () => {
  return (
    <div>
     <Header/>

     <div>
        <div className='bg-[#1B1A32] p-8 my-16 flex justify-around items-center gap-20'>
            <div className="flex flex-col gap-4 text-white font-bold tracking-wider">
                <h1 className='text-4xl'>Get in touch</h1>
                <p className='text-lg '>Want to get in touch? We'd love to hear from you.<br></br> Here's how you can reach us.</p>
            </div>
            <div>
                <img className='w-96' src="./contactUs.png" alt="" />
            </div>
        </div>

        <div className='flex justify-center  gap-6 text-[#1B1A32] my-24'>
            <div className='flex flex-col gap-3 text-center basis-1/5'>
                <FaMessage className='text-4xl self-center'/>
                <h1 className='font-bold text-2xl'>Message Us</h1>
                <a className='font-bold' href="mailto:a_djeffal@estin.dz?subject=Contact">a_djeffal@estin.dz</a>
                <p>Chat with ReBooks Assistant immediately or leave a message for an agent</p>

            </div>

            <div className='flex flex-col gap-3 text-center basis-1/5'>
                <MdLocalPhone className='text-4xl self-center'/>
                <h1 className='font-bold text-2xl'>Call Us</h1>
                <p className='font-bold'>+213563142841</p>
                <p >We’ll answer as soon as we can</p>

            </div>

            <div className='flex flex-col gap-3 text-center basis-1/5'>
            <div className='flex gap-2 text-4xl self-center'>
              <FaFacebookSquare className='  cursor-pointer'/>
              <FaInstagramSquare className=' cursor-pointer'/>
              <FaLinkedin className=' cursor-pointer'/>
              <FaTwitterSquare className=' cursor-pointer'/>

            </div>
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <p>Reach out to us on social media! Follow us for updates, book recommendations, and to engage with our community.</p>

            </div>
        </div>
        <div className='flex justify-center ml-8 my-12 text-white'>
            <div className='bg-[#283342] w-1/3 text-lg  px-8 py-4 tracking-wide'>Have a question or comment? Use the form below to send us a message directly. We'll respond as soon as possible</div>
        </div>
        <div className='flex flex-col items-center gap-8 my-16'>
            <textarea className='w-3/4 h-44  text-2xl border-2 border-black rounded-xl shadow-xl p-4 font-semibold' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-[#283342] px-8 py-2 text-lg font-semibold rounded-[5px] text-white'>Send Feedback</button>


        </div>

        <div className='flex flex-col gap-6 my-16'>
            <div className='flex justify-around'>
                <h1 className='text-4xl font-bold'>FAQ</h1>
                <div></div>
                <div></div>
            </div>
            <div className='flex flex-col items-center'>
                {FAQ.map((item)=>{
                    return(
                        <div className='w-2/4 border-b-2'>
                           <Accordion title={item.question} answer={item.answer}/>
                </div>

                    )
                })}
                

            </div>
        </div>


     </div>







     <Footer/> 
    </div>
  )
}

export default ContactUs
