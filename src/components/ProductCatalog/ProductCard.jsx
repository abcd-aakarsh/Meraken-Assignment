import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import ProductDialogBox from "./ProductDialogBox";

const ProductCard = ({ card }) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(card));
  };

  return (
    <>
      <div className="bg-zinc-200 shadow-lg hover:shadow-2xl rounded-lg p-4 transition-transform transform hover:scale-105">
        {/* Product Image */}
        <div
          className="overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setOpenDialog(true)}
        >
          <img
            src={`/${card.image}`}
            alt={card.name}
            className="w-full h-[200px] object-cover rounded-lg transition-transform transform hover:scale-110"
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            <strong>{card.price} Rs</strong>
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          {/* View Details Button */}
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all"
            onClick={() => setOpenDialog(true)}
          >
            View Details
          </button>

          {/* Add to Cart Button */}
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300  rounded-full hover:text-white hover:bg-[#8A5F20] transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {openDialog && (
        <ProductDialogBox card={card} onClose={() => setOpenDialog(false)} />
      )}
    </>
  );
};

export default ProductCard;
