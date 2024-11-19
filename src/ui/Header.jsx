import React from "react";
import logo from "../../public/assets/logo.png";
import cart from "../../public/assets/cart.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex font-serif items-center justify-between px-[40px] py-[20px]">
      <div className="flex justify-between items-center gap-4">
        <img
          src={logo}
          className="h-20 w-20 border-[4px] border-black rounded-full"
          alt="logo"
        />
        {/* <p className="text-[24px] hidden md:block font-semibold">Catalog</p> */}
      </div>
      <div>
        <ul className="flex items-center text-lg font-medium  justify-between space-x-6">
          <li className="hover:text-green-400">
            <Link to="home">Home</Link>
          </li>
          <li className="hover:text-green-400">
            <Link to="products">Products</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="relative inline-block">
          <button className="flex items-center gap-2 p-2 group">
            <img src={cart} className="h-8 w-8" alt="cart" />
            {/* Hidden text to show on hover */}
            <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-gray-700">
              Cart
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
