import React from "react";

const Background = () => {
  return (
    <div className="p-4">
      <div className="p-4 bg-[#E0D9CF] rounded-lg">
        <img
          src={
            "https://cdn.midjourney.com/bc82ebc6-a3a4-4eda-be0b-bb3e65d4b8d3/0_1.jpeg"
          }
          alt={"title"}
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />

        <h1 className="pb-3 text-3xl text-[#171615]">
          Discover the Inner piece
        </h1>
        <h4 className="pb-3 text-sm  text-[#171615]">
          Join us for a series of wellness retreats designed to help you finf
          the tranquility and rejuvetion
        </h4>
      </div>
    </div>
  );
};

export default Background;
