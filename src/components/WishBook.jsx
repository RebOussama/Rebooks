import { MdDeleteOutline } from "react-icons/md";
import {RiHeartLine,RiShareForwardLine} from "react-icons/ri";

const WishBook = ({imgURL,title,author,price}) => {
  return (
    <div>
      <div className="flex flex-row mx-16 my-8 py-8 border-b-[1px] border-black">
        <div>
          <img className="w-48 shadow-xl" src={imgURL} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-center my-2 ml-8">
          <p className="text-2xl">{title}</p>
          <p className="mt-2">{author}</p>
          <p className="font-bold my-2">${price}</p>
          <div> 
            <button className="bg-[#1B1A32] text-white w-60 py-1 rounded-lg my-2">
              send message
            </button>
            <button className="mx-2 rounded-lg bg-[#1B1A32] text-white py-2 px-3">
              <RiHeartLine/>
            </button>
            <button className=" rounded-lg bg-[#1B1A32] text-white py-2 px-3">
              <RiShareForwardLine />
            </button>
            <div className="relative">
              <button className="text-2xl absolute top-0 right-0">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        </div> 
      </div>

  
    </div>

    )
}

export default WishBook