import image from "../Images/ProductImages/img.jpg";
import React, { useContext, useState } from "react";

//import context provider
import { ProductModalContext } from "../context/ProductModalContext";
import { CartContext } from "../context/CartContext";
import { ModalContext } from "../context/ModalContext";
import { SelectedProductContext } from "../context/SelectedProductContext";

const ProductDetailsModel = ({
}) => {

  const {selectedProduct} = useContext(SelectedProductContext);
  const { toggleModal } = useContext(ModalContext);
  const { addItemInCart } = useContext(CartContext);
  const { productDetailsIsOpen, toggleProductModal } =
    useContext(ProductModalContext);


  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };
  const increaseeQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleOnClose = () => {
    setQuantity(1);
    toggleProductModal();
  };

  const handleCartItemInsertion = () => {
    addItemInCart(selectedProduct,quantity);
    toggleProductModal();
    toggleModal();
  };
  return (
    <>
      {/* Main modal */}
      {productDetailsIsOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-5xl  md:max-w-4xl max-h-full p-4">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Product Details
                </h3>

                <button
                  type="button"
                  onClick={handleOnClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="pl-10 md:pr-20 pr-10 py-10 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {/* Product Image Gallery */}
                  <div className="flex">
                    {/* Thumbnails */}
                    <div className="space-y-3 mr-4">
                      <img
                        src={image}
                        className="w-20 h-24 object-cover"
                        alt="Thumbnail 1"
                      />
                      <img
                        src={image}
                        className="w-20 h-24 object-cover"
                        alt="Thumbnail 2"
                      />
                      <img
                        src={image}
                        className="w-20 h-24 object-cover"
                        alt="Thumbnail 3"
                      />
                    </div>

                    {/* Main Image */}
                    <div>
                      <img
                        src={image}
                        className="w-full h-96 object-cover"
                        alt="Main Product"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h2 className="text-2xl font-bold mb-3">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xl text-gray-500 mb-2">
                      Rs. {selectedProduct.price}
                    </p>
                    <p className="text-gray-500 mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* Color  */}
                    <div className="my-4 ">
                      <label
                        htmlFor="colorSelect"
                        className="block text-gray-600 text-sm"
                      >
                        Color
                      </label>
                      <div className="flex space-x-2 my-3">
                        {selectedProduct.colors.map((color)=>(
                        <div key={color} className={`bg-${color}-600 p-4 rounded-full hover:cursor-pointer hover:bg-${color}-800`}></div>
                        ))}
                      </div>
                    </div>

                    <div className="my-9 flex space-x-4 ">
                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between border border-gray-300 rounded-lg w-1/3 px-3 py-1">
                        <button
                          className="text-lg text-gray-500"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>

                        <span className="text-lg font-medium">{quantity}</span>

                        <button
                          className="text-lg text-gray-500"
                          onClick={increaseeQuantity}
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <div className="">
                        <button
                          onClick={handleCartItemInsertion}
                          className="text-white px-6 py-2 rounded-lg w-full md:w-auto"
                          style={{ backgroundColor: "#b88e2f", color: "white" }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsModel;
