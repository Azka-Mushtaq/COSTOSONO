import React from "react";
import img from "../Images/ProductImages/img.jpg";
import ProductDetailsModel from "../Components/ProductDetailsModal";

const ProductCard = ({
  products,
  toggleProductModal,
  setSelectedProduct,
  setProductDetailsIsOpen
}) => {
  const handleClick = (product) => {
    setSelectedProduct(product);
    setProductDetailsIsOpen(true); // This should correctly set the state to open the modal
    toggleProductModal();
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8 gap-6 p-6 md:my-5 my-2">
      {products.map((product) => (
        <div
          className="relative group bg-gray-100 shadow-md rounded-lg overflow-hidden"
          key={product.id}
        >
          {/* Badge (optional) */}
          {product.badge && (
            <div
              className={`absolute top-2 right-2 ${product.badgeColor} text-white text-xs font-bold flex items-center justify-center rounded-full w-10 h-10 `}
            >
              {product.badge}
            </div>
          )}
          {/* Image */}
          <img
            src={img}
            alt={product.name}
            className="w-full h-56 object-cover"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <div className="text-white text-sm text-center">
              <button
                className="text-yellow-400 bg-white  px-4 py-2 rounded-lg mb-3"
                onClick={() => handleClick(product)}  
              >
                Add to cart
              </button>
              <div className="flex space-x-4">
                <button className="flex items-center">
                  <i className="fas fa-share-alt mr-1"></i> Share
                </button>
                <button className="flex items-center">
                  <i className="fas fa-heart mr-1"></i> Like
                </button>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-700">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <p className="font-bold text-gray-900">{product.price}</p>
            {product.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                {product.oldPrice}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
