import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="w-full min-h-screen flex items-center justify-center bg-gray-900">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div class="w-full text-7xl font-bold">
            <h1 class="w-full md:w-2/3">Ready to grow?</h1>
          </div>
          <div class="flex mt-8 flex-col md:flex-row md:justify-between">
            <p class="w-full md:w-2/3 text-gray-400">
              See why 100,000+ businesses trust us. Book a personalized demo to
              see how SalesCaptain provides you the right tools to grow your
              business.
            </p>
            <div class="w-44 pt-6 md:pt-0">
              <input
                type="text"
                className="border p-2 rounded placeholder-gray-700 placeholder-opacity-70 placeholder-italic extend w-80"
                placeholder="Enter your name"
              /> <br/>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded foot-button">
                GET DEMO
              </button>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex mt-24 mb-12 flex-row justify-between">
             
              <div class="flex flex-row space-x-8 items-center justify-between">
               <p className="text-white">⭐⭐⭐⭐  500+ reviews</p>
               <p className="text-white">Google Capterra Software Advice </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
