import { MdDeleteOutline } from "react-icons/md";
import {RiHeartLine,RiShareForwardLine} from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

const MyBook = ({imgURL,title,author,price}) => {
  return (
    <div>
      <div className="flex flex-row mx-16 my-8 py-8 border-b-[1px] border-black">
        <div>
          <img className="w-48 shadow-xl" src={imgURL} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-center my-2 ml-8">
          <p className="text-2xl">Title:</p>
          <p className="text-2xl">{title}</p>
          <p className="mt-2">Author:</p>
          <p>{author}</p>
          <p className="font-bold mt-2">Price</p>
          <p className="font-bold">${price}</p>
         
            <div className="relative">
              <button className="text-2xl absolute top-0 right-8">
                <MdOutlineModeEdit />
              </button>
              <button className="text-2xl absolute top-0 right-0">
                <MdDeleteOutline />
              </button>
            </div>
          
        </div> 
      </div>

  
    </div>

    )
}

export default MyBook