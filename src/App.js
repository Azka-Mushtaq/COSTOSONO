import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import ShoppingCartModal from "./Components/ShoppingCartModal";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contact from "./Components/Contact";
import Checkout from "./Components/Checkout";
import ProductDetailsModel from "./Components/ProductDetailsModal";
import ProductsInCart from "./Components/ProductsInCart";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Cards from "./Components/Cards";
import HomeHeadings from "./Components/HomeHeadings";

function App() {

 
 
  // Modal open/close state
  const [isOpen, setIsOpen] = useState(false);
  const [productDetailsIsOpen, setProductDetailsIsOpen] = useState(true);

  const toggleProductModal = () => {
    setProductDetailsIsOpen(!productDetailsIsOpen);
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product

  const products = [
    {
      id: 1,
      name: "Slytherine",
      description: "Stylish cafe chair",
      price: 2.5,
      oldPrice: "Rp 3.500.000",
      badge: "-30%",
      badgeColor: "bg-red-500",
      quantity: 2,
      image: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2.5,
      oldPrice: "",
      badge: "",
      badgeColor: "",
      quantity: 3,
      image: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7.0,
      oldPrice: "Rp 14.000.000",
      badge: "-50%",
      badgeColor: "bg-red-500",
      quantity: 3,
      image: "https://example.com/image3.jpg",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500.0,
      oldPrice: "",
      quantity: 2,
      badge: "New",
      badgeColor: "bg-green-500",
      image: "https://example.com/image4.jpg",
    },
    {
      id: 5,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500.0,
      oldPrice: "",
      badge: "",
      quantity: 1,
      badgeColor: "bg-green-500",
      image: "https://example.com/image4.jpg",
    },
  ];

  //Cart Items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemInCart = (item) => {

    // Check if the item already exists in the cart
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      // Add the new item to the cartItems array if it doesn't exist
      setCartItems((prevItems) => [...prevItems, item]);
    } else {
      console.log("Item already exists in the cart");
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    // Filter out the item with the specified id
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };


    // State for subtotal
    const [subtotal, setSubtotal] = useState(0);

    // Calculate subtotal whenever cartItems changes
    useEffect(() => {
      const total = cartItems.reduce((acc, item) => acc + item.price, 0);
      setSubtotal(total);
    }, [cartItems]);

  return (
    <>
      <Router>
        <Navbar toggleModal={toggleModal} />
        <ShoppingCartModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          cartItems={cartItems}
          removeItemFromCart={removeItemFromCart}
          subtotal={subtotal}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Carousel/>
                <HomeHeadings heading="Browse The Range" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, labore blanditiis? "/>
                <Cards/>
                <HomeHeadings heading="Our Products"/>
                <ProductCard
                  products={products}
                  toggleProductModal={toggleProductModal}
                  setSelectedProduct={setSelectedProduct}
                  setProductDetailsIsOpen={setProductDetailsIsOpen}/>
                  <ProductDetailsModel
                  productDetailsIsOpen={productDetailsIsOpen}
                  toggleProductModal={toggleProductModal}
                  selectedProduct={selectedProduct}
                  addItemInCart={addItemInCart}
                  toggleModal={toggleModal}
                />
                
              </>
            }
          />

          <Route
            exact
            path="/shop"
            element={
              <>
                <Header name="Shop" />
                <Filter />
                <ProductCard
                  products={products}
                  toggleProductModal={toggleProductModal}
                  setSelectedProduct={setSelectedProduct}
                  setProductDetailsIsOpen={setProductDetailsIsOpen}
                  
                />
                <ProductDetailsModel
                  productDetailsIsOpen={productDetailsIsOpen}
                  toggleProductModal={toggleProductModal}
                  selectedProduct={selectedProduct}
                  addItemInCart={addItemInCart}
                  toggleModal={toggleModal}
                />
              </>
            }
          />

          <Route
            exact
            path="/contact"
            element={
              <>
                <Header name="Contact" />
                <Contact />
              </>
            }
          />

          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header name="CheckOut" />
                <Checkout cartItems={cartItems}
                subtotal={subtotal} />
              </>
            }
          />
        </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
