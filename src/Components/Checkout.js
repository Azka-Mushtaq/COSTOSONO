import OrderForm from './OrderForm';
import OrderSummary from './OrderSummary';
import {Link} from 'react-router-dom'

const Checkout = ({ cartItems,
  subtotal
 }) => {
  return (
    <>
      
      <div className="container flex justify-center text-4xl font-bold mt-20 ">
      <h1>Billing details</h1>
      </div>
      <div className="container flex md:flex-row flex-col justify-center  mx-auto mb-10 lg:space-x-20 space-x-10">
        
        {/* Billing Details */}
        <div className="md:w-1/3 p-4 md:px-0">
        <OrderForm/>
        </div>
        {/* Order Summary */}
        <div className="md:w-1/3 p-4 space-y-3 md:px-0">
          <OrderSummary cartItems={cartItems} 
          subtotal={subtotal}/>

          <hr/>

          <p className='text-gray-500 py-5 text-sm text-justify'>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to='/privacy' className='font-semibold hover:text-black hover:cursor-pointer'>
          privacy policy</Link>.
          </p>
          <button href="" className=" py-2 rounded-xl border border-gray-600 w-1/2  text-gray-900 hover:bg-gray-600 hover:text-white">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
