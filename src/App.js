import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
import ShoppingCartModal from "./Components/ShoppingCartModal.jsx";
import Checkout from "./Components/Checkout.jsx";
import Footer from "./Components/Footer.jsx";

//Hooks
import useFetch from "./Hooks/useFetch";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { ModalProvider } from "./context/ModalContext";
import { ProductModalProvider } from "./context/ProductModalContext";
import {SelectedProductProvider} from "./context/SelectedProductContext.js";

//Pages
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Admin from "./Pages/Admin.jsx";
import Add from "./Pages/Add.jsx";

function App() {
  const { data: products } = useFetch("http://localhost:8000/products");

  return (
    <CartProvider>
      <ModalProvider>
        <SelectedProductProvider>
          <ProductModalProvider>
            <Router>
              
              <Navbar />
              <ShoppingCartModal />

              <Routes>
                <Route exact path="/" element={<Home products={products} />} />
                <Route exact path="/shop" element={<Shop products={products} />} />
                <Route exact path="/contact" element={<ContactUs />} />
                <Route exact path="/checkout" element={<> <Header name="CheckOut" /> <Checkout /> </> }/>
                <Route exact path="/admin/add" element={<Add />} />
                <Route exact path="/admin" element={<Admin products={products} />} />
              </Routes>

              <Footer />

            </Router>
          </ProductModalProvider>
        </SelectedProductProvider>
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
