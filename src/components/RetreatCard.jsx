import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import React from "react";

const RetreatCard = ({ retreat }) => {
  const { title, description, date, location, price, image } = retreat;

  const formattedDate = new Date(date * 1000).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border p-4 rounded-lg shadow-md bg-[#E0D9CF]">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="text-gray-600 mb-2 flex items-center">
        <CiCalendarDate className="mr-2 text-lg" /> <span>{formattedDate}</span>
      </div>
      <div className="text-gray-600 mb-2 flex items-center">
        <MdLocationPin className="mr-2 text-lg" /> <span>{location}</span>
      </div>
      <div className="text-gray-800 font-semibold flex items-center">
        <RiMoneyDollarBoxFill className="mr-2 text-lg" /> <span>${price}</span>
      </div>
    </div>
  );
};

export default RetreatCard;
