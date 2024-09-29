import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import ProductDetailsModel from "../Components/ProductDetailsModal";

export default function Shop({products}) {
  return (
    <>
      <Header name="Shop" />
      <Filter />
      {products && <ProductCard products={products} />}
      <ProductDetailsModel />
    </>
  );
}
