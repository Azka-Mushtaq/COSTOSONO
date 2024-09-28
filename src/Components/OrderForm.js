import React from "react";
import OrderSummary from "./OrderSummary";

const OrderForm = () => {
  return (
    <div className=" p-4 space-y-5">
      <div className="flex  space-x-4">
      <div className="w-1/2 space-y-2">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-semibold "
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="w-1/2 space-y-2">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-semibold "
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      </div>
      
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Country / Region
        </label>
        <select
          id="country"
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 p-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>Pakistan</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Street address
        </label>
        <input
          type="text"
          id="address"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Town / City
        </label>
        <input
          type="text"
          id="city"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="zip"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          ZipCode
        </label>
        <input
          type="text"
          id="zip"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">

        <input
          type="text"
          id="additionalInfo"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Aditional Information"
        />
      </div>

    </div>
  );
};

export default OrderForm;
