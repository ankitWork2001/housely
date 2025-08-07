const Card = ({ title, description, imageUrl }) => {
  return (
 
    <div className="bg-[#474747] w-[291px] h-[239px] rounded-[30px] shadow-lg overflow-hidden flex flex-col items-center">
      
    
      <div className="relative w-[267px] h-[162px] mt-2 rounded-[30px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    
      <div className="p-3 w-full text-center">
        <button className="w-[138px] h-[36px] bg-[#81B5CA] text-white text-sm font-medium rounded-full cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
       {title}
      </button>
        {/* <p className="text-xs text-gray-500 mt-1">{description}</p> */}
      </div>
    </div>
  );
};

export default Card;