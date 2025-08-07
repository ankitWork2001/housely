import React from "react";

const PropertyCard = ({ image, title, desc }) => {
  return (
    <div
      className="inline-block bg-[#000000B8] text-white rounded-[30px] w-[381px] h-[341px] shrink-0 snap-start overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-[363px] h-[195px] object-cover rounded-[30px] mx-auto mt-[10px]"
      />
      <div className="px-5 pt-3">
        <h3 className="text-[20px] font-bold mb-1">{title}</h3>
        <p className="text-sm text-[#ccc] mb-4">{desc}</p>
        <button className="bg-[#81B5CA] hover:[] text-white px-4 py-2 rounded-full font-semibold block m-auto cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
          Search Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
