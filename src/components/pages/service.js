import React from 'react';
import { useNavigate } from 'react-router-dom';
import Imagee from "../../assets/photography.jpeg";
import Imageee from "../../assets/videography.jpg";
import Imageeee from "../../assets/matterport.jpg";
import Imageeeee from "../../assets/video.jpg";

const OurServices = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/packages');
  };
  return (
    <div id="service" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our  <span className="text-green-600">Services</span></h2>
    <p className="text-lg text-gray-700 mb-8">
        We offer many services for our clients, Here are some of our services:
      </p>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imagee} alt="Service 1" />
                <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Photography</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We provide you with commercial quality and processed high definition photos within 1 business day.  Includes 25-50* HDR Professional Images. [* Number of photos depends on the size of the house.]</p>
                  <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-amber-700" onClick={handleRedirect}>
                  Learn More
                </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageee} alt="Service 2" />
                <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Aerial Photography</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We will use drone technology to capture a multidimensional view of the whole property. Aerial photography will set your property leagues above the others.</p>
                  <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-amber-700" onClick={handleRedirect}>
                  Learn More
                </button>
                </div>
              </div>
            </div>

          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageeeee} alt="Service 3" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Cinematic videography</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Captivate your audience with an interior video of your property. Be able to feature the community and the many amenities that make this address a great place to live.</p>
                  <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-amber-700" onClick={handleRedirect}>
                  Learn More
                </button>
                </div>
              </div>
            </div>

           
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageeee} alt="Service 4" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Matterport Virtual Tour</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Our signature service Matterport Virtual Tour provides buyers access to your listings 24/7. Our immersive interface allows buyers to explore every room in the house at all angles. Grow your business by featuring a Matterport Virtual Tour at your next listing presentation..</p>
                  <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-amber-700" onClick={handleRedirect}>
                  Learn More
                </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default OurServices;