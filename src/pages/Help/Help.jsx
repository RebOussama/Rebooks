import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion';
import HelpCards from './components/HelpCards';

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

const Help = () => {
  return (
    <div>
        
        <Header/>

        <div>
        <div className='bg-[#1B1A32] px-16 py-8 my-16 flex justify-around items-center gap-20'>
            <div className="flex flex-col  gap-4 text-white  tracking-wider">
                <h1 className='text-4xl font-bold'>Welcome to the ReBooks Help Center!</h1>
                <p className='  text-lg '>We're here to assist you with any questions or issues you may encounter while using our platform. Below, you'll find answers to common questions, step-by-step guides for using our features, and important information about our policies and guidelines.</p>
            </div>

            <div>
                <img className='w-[1000px] ' src="./Help.png" alt="" />
            </div>
        </div>

        <HelpCards/>

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

export default Help
