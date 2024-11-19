import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ card }) => {
  return (
    <Link
      to={`products/${card.name}`}
      className="  px-[10px] bg-gray-100 flex hover:scale-105 rounded-2xl shadow-sm transition-all duration-200 gap-y-[8px] justify-center font-serif  items-center flex-col py-[20px]"
    >
      <img
        src={`/${card.image}`}
        className="w-[260px] h-[280px] rounded-2xl "
        alt={card.name}
      />
      <div className="flex justify-between items-center gap-4 mb-4">
        <h3 className="font-medium text-xl">{card.name}</h3>
        <p className="">
          <strong>{card.price}</strong> Rs
        </p>
      </div>
      <div className="flex gap-4">
        <button className="border rounded-3xl border-yellow-500 text-yellow-500 hover:text-gray-800 hover:bg-yellow-400 px-2 py-1 font-sm">
          View Details
        </button>
        <button className="border rounded-3xl border-green-500 text-green-500 hover:text-gray-800 hover:bg-green-400 px-2 py-1 font-sm">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
