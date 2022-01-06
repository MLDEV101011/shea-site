import React from "react";

function ServiceCard({ title, description, image, time, price }) {
  return (
    <div className="md:w-3/12 mx-2 md:mx-10 mb-10 md:p-10 rounded-xl flex-col w-full bg-white">
      <div className="flex flex-col">
        <p className=" text-gray-600 text-2xl text-center md:text-left font-bold">
          {title}
        </p>
      </div>
      <div className="flex flex-col ">
        <p className="capitalize text-center md:text-left text-gray-600 text-lg mb-5">
          {description}
        </p>
        <img src={image} alt="service" className="rounded-xl" />
        
        <p className="m-0 md:ml-10 font-bold capitalize text-gray-400 text-sm md:text-lg">{time} / {price}</p>
      </div>
      
    </div>
  );
}

export default ServiceCard;
