import React from "react";

const Header = () => {
  return (
    <div className="text-4x font-semibold text-white bg-black ">
      <div className="flex items-center justify-between w-[1150px] h-20 mx-auto ">
        <div className="header-logo">
          <img
            className="w-12"
            src="https://www.bing.com/th?id=OIP.96DpV68x0LpscTkkDnwLCwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="logo"
          />
        </div>
        <div className="space-x-12 header-nav">
          <span className="nav-item-1">Products</span>
          <span className="nav-item-2">Features</span>
          <span className="nav-item-3">Made for</span>
          <span className="nav-item-4">Education</span>
          <span className="nav-item-5">Business API</span>
          <span className="nav-item-6"> Blog </span>
          <span className="nav-item-7">Login</span>
          <span className="px-4 py-[10px] text-black bg-white rounded-md nav-item navbtn2">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
