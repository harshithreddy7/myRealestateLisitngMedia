import React from 'react'
import Image from "../../assets/4.jpg";

const Packages = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-green-600">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">How We  <span className="text-green-600">Serve You</span></h1>
          <p className="text-sm font-sans  md:text-2xl font-medium text-green-600 mb-4">
            Stunning professional photography and videography to help you showcase your properties
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
          Welcome to our real estate Photography, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.
            <br/>
            <br/>
            We provide professional high dynamic range photos,with meticulous processing for every image.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Packages