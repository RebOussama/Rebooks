const Subscribe = () => {
    return (
      <div className="bg-custom-blue">
        <div className='flex flex-row justify-center flex-wrap gap-8 pt-10 mt-10'>
          <div className="flex-1" >
            <img className="mb-4 mt-4" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src="../../public/SubscrtiptionImgs/audio.png" alt=""/>
            <p className='text-center text-custom-dark-grey mt-8 mx-4' style={{fontSize : "12px"}}>Discover the joy of hands-free learning and entertainment with an audiobook subscription - transform mundane moments into opportunities for growth and discovery.</p>  
          </div>
          <div className="flex-1" >
            <img className="mb-4 mt-4" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src="../../public/SubscrtiptionImgs/subscribe.png" alt=""/>
            <p className='text-center text-custom-dark-grey mt-8 mx-4' style={{fontSize : "12px"}}>Activate your subscription and gain instant access to a treasure trove of both audio and PDF books, enriching your mind with diverse stories, insights, and knowledge, all at no extra cost.</p>  
          </div>
          <div className="flex-1" >
            <img className="mb-4 mt-4" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src="../../public/SubscrtiptionImgs/PDF.png" alt=""/>
            <p className='text-center text-custom-dark-grey mt-8 mx-4' style={{fontSize : "12px"}}>Empower your reading journey with a PDF book subscription – access a wealth of knowledge at your fingertips, anytime, anywhere, and elevate your learning experience to new heights.</p>  
          </div> 
        </div>
        <div className="flex justify-center items-center">
          <button className="text-white text-center bg-custom-green my-10 py-2 px-12 rounded-xl text-bold">
            <strong>
              SUBSCRIBE NOW
            </strong>
          </button>
        </div>
      </div>
        
    )
}   

export default Subscribe