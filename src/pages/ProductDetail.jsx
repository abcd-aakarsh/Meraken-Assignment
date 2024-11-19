import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import data from "../utils/product";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find the product
  const product = data.find(
    (e) => e.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    return (
      <div className="text-center font-serif py-10">Product not found</div>
    );
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="py-6 px-[40px] lg:px-[80px] font-serif">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-[20px] py-[10px] border-2 border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-150 mb-8"
      >
        ← Back
      </button>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row text-center gap-4 justify-between items-center">
        <div className="border-2 border-black rounded-3xl object-cover px-4 py-4">
          <img
            src={`/${product.image}`}
            className="max-w-[400px] aspect-square max-h-[400px]"
            alt={product.name}
          />
        </div>
        <div className="flex gap-5 flex-col text-left">
          <h1 className="text-5xl">{product.name}</h1>
          <p className="text-2xl">Price: {product.price} Rs</p>
          <p className="text-xl text-gray-700">{product.description}</p>
          <div>
            <button
              onClick={handleAddToCart}
              className="px-[24px] py-[12px] border-2 rounded-full font-semibold transition-all duration-100 border-[#B0802E] text-[#B0802E] hover:text-white hover:bg-[#B0802E]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
