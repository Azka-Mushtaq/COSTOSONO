import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img from "../Images/ProductImages/img.jpg";
import ProductsInCart from "./ProductsInCart";
import {Link} from 'react-router-dom'


const ShoppingCartModal = ({
  isOpen,
  toggleModal,
  cartItems,
  removeItemFromCart,
  subtotal
}) => {

  const handleCheckoutClick=()=>
  {
    toggleModal();
    
  }
 
  return (
    <div>
      {/* Modal (Overlay + Cart) */}
      {isOpen && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-60">
          {/* Modal Content */}
          <div className="fixed right-0 bg-white max-w-sm h-full w-full flex flex-col shadow-lg rounded-lg p-6 ">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600"
            >
              <i className="fas fa-times h-6 w-6" />
            </button>

            {/* Shopping Cart Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
            </div>

            <hr className="mb-5 -mx-6" />

            {/* Items in Cart */}
            <div className="">
              {/* Item 1 */}
              <ProductsInCart 
              cartItems={cartItems} 
              removeItemFromCart={removeItemFromCart} />
            </div>

            <div className="mt-auto">
              {/* Subtotal */}
              <div className="mt-6">
                <div className="flex justify-between items-center font-semibold">
                  <span>Subtotal</span>
                  <span className="text-yellow-400 font-semibold">
                    Rs. {subtotal}
                  </span>
                </div>
              </div>

              <hr className="mt-5 -mx-6" />

              {/* Action Buttons */}
              <div className="mt-5 flex justify-between space-x-4">
                <Link to='/cart' onClick={toggleModal} className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-800 text-center rounded-full hover:bg-gray-100 transition">
                  Cart
                </Link>
                <Link to={'/checkout'}  onClick={toggleModal}
                 className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full text-center hover:bg-gray-100 transition">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartModal;
