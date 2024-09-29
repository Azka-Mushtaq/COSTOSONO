import React from "react";
import Carousel from '../Components/Carousel'
import Cards from '../Components/Cards'
import HomeHeadings from '../Components/HomeHeadings'
import ProductCard from '../Components/ProductCard'
import ProductDetailsModel from "../Components/ProductDetailsModal";

export default function Home({products}) {

  return (
    <>
      <Carousel />
      <HomeHeadings
        heading="Browse The Range"
        para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, labore blanditiis? "
      />
      <Cards />
      <HomeHeadings heading="Our Products" />
      {products && <ProductCard products={products} />}
      <ProductDetailsModel />
    </>
  );
}
