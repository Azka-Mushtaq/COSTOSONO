import React from "react";

const OrderSummary = ({ cartItems, subtotal }) => {
  return (
    <div className="w-full font-sans">
      <div>
        <div className="flex justify-between py-2">
          <div className="text-xl font-semibold">
            <h2>Product</h2>
          </div>
          <div className="text-xl font-semibold">Subtotal</div>
        </div>
      </div>

      {cartItems && cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div key={product.id}>
            {/* Product Row */}
            <div className="flex justify-between py-2">
              <div className="text-gray-400">
                <span>{product.name}</span>{" "}
                <span className="ml-1">x {product.quantity}</span>
              </div>
              <div className="font-semibold">
                Rs. {(product.price * product.quantity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="py-3">No Items in the cart.</p>
      )}

      <div className="flex justify-between py-2 mt-4">
        <div className="font-semibold">Subtotal</div>
        <div className="font-semibold">
          Rs. {subtotal}
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="font-semibold">Total</div>
        <div className="font-bold text-yellow-500 text-lg">
          Rs. {subtotal}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
