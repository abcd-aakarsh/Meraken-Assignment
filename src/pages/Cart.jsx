import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <h2 className="text-[36px] mb-6 font-serif leading-tight text-center">
        Cart Items
      </h2>

      {cart.items.length > 0 ? (
        <>
          <div className="grid gap-4">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center border p-4 rounded-lg shadow-md"
              >
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-[60px] h-[60px] rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item))}
                    className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item))}
                    className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center ">
            <h3 className="text-lg font-medium">
              Total Items: {cart.totalQuantity}
            </h3>
            <h3 className="text-lg font-medium mt-2">
              Total Price: <span className="text-green-500">${totalPrice}</span>
            </h3>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
