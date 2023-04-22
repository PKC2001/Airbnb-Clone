import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div
      className="
        space-x-4 
        rounded-xl 
        cursor-pointer 
        hover:scale-105 
        transform transition duration-300 
        ease-out"
    >
      <div
        className="
        relative
        h-80
        w-80"
      >
        <Image
          className="rounded-xl"
          src={img}
          alt="places"
          layout="fill"
        />
      </div>

      <div>
        <h3 className="text-gray-500">{title}</h3>
      </div>
    </div>
  );
};

export default MediumCard;
