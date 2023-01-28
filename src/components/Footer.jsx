import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[100vh] bg-black">
      <div className="flex mx-32 border-b border-gray-700">
        <div className=" w-1/3 marketing-platforms mt-32">
          <div>
            <img className="mb-8"
              src="https://moises.ai/assets/images/moises-acqua-full.svg"
              alt="logo"
            />
          </div>
          <div className="text-gray-500 mb-6">Empowering Creative Potential</div>
          <div className="mb-4 flex justify-between  w-36 border border-gray-700 rounded-md px-1">
            <span className="text-white">English</span>
            <span className="cursor-pointer text-white">V</span>
          </div>
          <div className="space-x-6">
            <span className="text-gray-500">icon</span>
            <span className="text-gray-400">icon</span>
            <span className="text-gray-400">icon</span>
            <span className="text-gray-400">icon</span>
            <span className="text-gray-400">icon</span>
            <span className="text-gray-400">icon</span>
          </div>
        </div>
        <div className="w-2/3 mt-32 space-x-3 services flex">
          <ul className="service-1 w-1/4">
            <li className="text-gray-400 text-xs font-medium mb-3">HOW TO</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Remove vocals from a song</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Separate vocals from a song</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Master a song</li>
            <li className="text-gray-500 mb-3 cursor-pointer">What is the difference between mixing and mastering?</li>
          </ul>
          <ul className="service-2 w-1/4">
            <li className="text-gray-400 text-xs font-medium mb-3">MADE FOR</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Drummers</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Singers</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Bassists</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Guitarists</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Producers and DJ's</li>
          </ul>
          <ul className="service-3 w-1/4">
            <li className="text-gray-400 text-xs font-medium mb-3">PRODUCTS</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Moises App</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Moises Web App</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Moises iPad App</li>
          </ul>
          <ul className="service-4 w-1/4">
            <li className="text-gray-400 text-xs font-medium mb-3">COMPANY</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Education</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Business API</li>
            <li className="text-gray-500 mb-3 cursor-pointer">FAQ</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Privacy</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Terms</li>
            <li className="text-gray-500 mb-3 cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
