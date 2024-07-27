import React from "react";
import Image from "../../assets/main.png";
import video from "../../assets/Home_video.mp4"

const HomePage = () => {
  return (
    <div id="home" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-400">
  <video className="absolute top-0 left-0 w-full h-full opacity-80 object-cover z-0" autoPlay loop muted>
    <source src={video} alt="home_video" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="relative z-10 p-8 flex flex-col items-center justify-center w-full">
    <div className="md:w-1/2 md:pl-8 w-full flex flex-col items-center">
      <div className="bg-white bg-opacity-75 p-4 rounded">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Listing Media <span className="text-green-600">For Agents</span>
        </h1>
      </div>
    </div>
  </div>
</div>

  );
};

export default HomePage;























