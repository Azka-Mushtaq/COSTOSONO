import {Link } from "react-router-dom";

import React from "react";



const Navbar = (props) => {
  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="container-fluid px-5 flex items-center justify-between py-4 ">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <img src={img} alt="Logo" width={30} height={30} /> */}
            <Link to="/" className="no-underline text-black hover:text-black">
            <span className="text-xl font-bold">COSTOSONO</span>            
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black no-underline"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-black no-underline"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black no-underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black no-underline"
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center ">
            <Link to="/profile" className="text-gray-600 hover:text-black ">
              <i className="far fa-user"></i> {/* User Icon */}
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-black ">
              <i className="fas fa-search"></i> {/* Search Icon */}
            </Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-black ">
              <i className="far fa-heart"></i> {/* Heart Icon */}
            </Link>
            <a onClick={props.toggleModal} className="text-gray-600 hover:text-black">
              <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
