import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ card }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(card));
  };

  return (
    <div className="px-[10px] bg-gray-100 flex hover:scale-105 rounded-2xl shadow-sm transition-all duration-200 gap-y-[8px] justify-center font-serif items-center flex-col py-[20px]">
      {/* Product Image */}
      <Link to={`/products/${card.name.toLowerCase().replace(/\s+/g, "-")}`}>
        <img
          src={`/${card.image}`}
          className="w-[260px] h-[280px] rounded-2xl"
          alt={card.name}
        />
      </Link>

      {/* Product Name and Price */}
      <div className="flex justify-between items-center gap-4 mb-4">
        <h3 className="font-medium text-xl">{card.name}</h3>
        <p className="">
          <strong>{card.price}</strong> Rs
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link
          to={`/products/${card.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="border rounded-3xl transition-all duration-100 border-[#374F1D] text-[#374f1d] hover:text-white hover:bg-[#374F1d] px-4 py-2 font-sm"
        >
          View Details
        </Link>
        <button
          className="border rounded-3xl transition-all duration-100 border-[#B0802E] text-[#B0802E] hover:text-white hover:bg-[#B0802E] px-4 py-2 font-sm"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
