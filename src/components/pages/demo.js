import React from "react";
import video from "../../assets/video.mp4";
import houseIcon from "../../assets/house.png";
import locationIcon from "../../assets/location.png";
import moneyIcon from "../../assets/money.png";

const Demo = () => {
  return (
    <div id="demo" className="flex flex-col md:flex-row w-full h-screen bg-green-600">
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Real  <span className="text-green-600">Estate</span> Video</h1>
          <div className="aspect-w-16 aspect-h-9">
            <video className="w-full h-full" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="text-white">
        <h2 className="text-1xl font-bold mb-4">My Real Estate</h2>
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
          <ul className="list-disc list-inside mb-8">
            <li className="flex items-center space-x-4">
              <img src={houseIcon} alt="House Icon" className="w-8 h-8" />
              <span>Professional photography and videography help top producers keep ahead of the competition in the tech-driven real estate business. This strategy boosts their web visibility, impresses customers, and encourages listings and recommendations.</span>
            </li>
            <li className="flex items-center space-x-4 my-10">
              <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
              <span>Located in prime areas with excellent infrastructure</span>
            </li>
            <li className="flex items-center space-x-4 my-10">
              <img src={moneyIcon} alt="Money Icon" className="w-8 h-8" />
              <span>Affordable prices. We go above and beyond </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;