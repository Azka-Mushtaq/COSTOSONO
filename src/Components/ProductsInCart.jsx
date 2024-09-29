import "@fortawesome/fontawesome-free/css/all.min.css";
import img from "../Images/ProductImages/img.jpg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const ProductsInCart = () => {

  const {cartItems, removeItemFromCart} =useContext(CartContext);

  return (
    <>
      {/* Items in Cart */}
      {cartItems && cartItems.length > 0 ? ( 
        <div className="space-y-4">
          {cartItems.map((cartItem) => {
           

            return ( 
              <div className="flex justify-between items-center" key={cartItem.id}>
                <div className="flex items-center space-x-4">
                  <img
                    src={img} 
                    alt={cartItem.name} 
                    className="rounded-lg w-16 h-16"
                  />
                  <div>
                    <h3 className="font-semibold">{cartItem.name}</h3>
                    <p>
                      {cartItem.quantity} x{" "}
                      <span className="text-yellow-400 font-semibold">
                        Rs. {cartItem.price}
                      </span>
                    </p>
                  </div>
                </div>
                <button onClick={()=> {removeItemFromCart(cartItem.id)}}
                 className="text-gray-400 hover:text-gray-600" >
                  <i className="fas fa-trash-alt h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No products in the cart.</p>
      )}
    </>
  );
};

export default ProductsInCart;
