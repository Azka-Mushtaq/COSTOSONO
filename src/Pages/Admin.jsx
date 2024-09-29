import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import AddNewProductHeading from "../Components/AddNewProductHeading";
import Carousel from "../Components/Carousel";

export default function Admin({products}) {
  return (
    <main>
      <Carousel isAdmin={true}/>
      <Filter />
      
      {products && <ProductCard isAdmin={true} products={products} />}
    </main>
  );
}
