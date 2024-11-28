import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductDialogBox = ({ card, onClose }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(card));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[90%] md:w-[600px] p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Product Image */}
        <div className="text-center">
          <img
            src={`/${card.image}`}
            alt={card.name}
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
        </div>

        {/* Product Details */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {card.name}
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          <strong>{card.price} Rs</strong>
        </p>
        <p className="text-sm text-gray-500 mb-6">
          {card.description || "No description available."}
        </p>

        {/*  Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition-all"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300  rounded-full hover:text-white hover:bg-[#8A5F20]  transition-all"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDialogBox;
