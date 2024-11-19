import React from "react";
import { useSelector } from "react-redux";
import logo from "../../public/assets/logo.png";
import cart from "../../public/assets/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="flex font-serif items-center justify-between px-[40px] py-[20px]">
      <div className="flex justify-between items-center gap-4">
        <img
          src={logo}
          className="h-20 w-20 border-[4px] border-black rounded-full"
          alt="logo"
        />
      </div>
      <div>
        <Link to="/products" className="text-lg font-medium hover:underline">
          Products
        </Link>
      </div>
      <div>
        <div className="relative inline-block">
          <Link to="/cart" className="flex items-center gap-2 p-2 group">
            <img src={cart} className="h-8 w-8" alt="cart" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
