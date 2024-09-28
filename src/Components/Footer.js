import React from 'react';
import qualityImage from '../Images/FooterImages/Quality.png'
import guranteeImage from '../Images/FooterImages/Guarantee.png'
import shippingImage from '../Images/FooterImages/Shipping.png'
import customerSupportImage from '../Images/FooterImages/CustomerSupport.png'
const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container-fluid ">
        {/* Top section with icons */}
        <div className="flex flex-col justify-center py-5 px-20  md:flex-row md:space-x-4"  style={{backgroundColor:"#fff4e4"}}>
          
          <div className="flex items-center my-5 md:w-1/4">
            <img src={qualityImage} alt="High Quality Icon" className="w-12 h-12 mr-2" />
            <div>
              <p className="font-bold mb-0">High Quality</p>
              <span className="text-gray-500">Crafted from top materials</span>
            </div>
          </div>

          <div className="flex items-center my-5 md:w-1/4">
            <img src={guranteeImage} alt="Warranty Icon" className="w-12 h-12 mr-2" />
            <div>
              <p className="font-bold mb-0">Warranty Protection</p>
              <span className="text-gray-500">Over 2 years</span>
            </div>
          </div>

          <div className="flex items-center my-5 md:w-1/4">
            <img src={shippingImage} alt="Shipping Icon" className="w-12 h-12 mr-2" />
            <div>
              <p className="font-bold mb-0">Free Shipping</p>
              <span className="text-gray-500">Order over 150$</span>
            </div>
          </div>

          <div className="flex items-center my-5 md:w-1/4">
            <img src={customerSupportImage} alt="Support Icon" className="w-12 h-12 mr-2" />
            <div>
              <p className="font-bold mb-0">24/7 Support</p>
              <span className="text-gray-500">Dedicated support</span>
            </div>
          </div>
        </div>

        {/* Bottom section with links and company info */}
        <div className="flex flex-col p-20 pb-0 md:flex-row md:space-x-8 justify-center">
          <div className="md:w-1/3">
            <p className='font-bold'>COSTOSONO</p>
            <p className='text-gray-500'>400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA</p>
          </div>
          <div className="md:w-1/4">
            <p className='text-gray-500 mb-5'>Links</p>
            <ul className="list-none">
              <li className='mb-4'><a href="#" className='text-black hover:underline'>Home</a></li>
              <li className='mb-4'><a href="#" className='text-black hover:underline'>Shop</a></li>
              <li className='mb-4'><a href="#" className='text-black hover:underline'>About</a></li>
              <li className='mb-4'><a href="#" className='text-black hover:underline'>Contact</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <p className='text-gray-500 mb-5'>Help</p>
            <ul className="list-none">
              <li className='mb-4'><a href="#" className='text-black hover:underline'>Payment Options</a></li>
              <li className='mb-4'><a href="#" className='text-black hover:underline'>Returns</a></li>
              <li className='mb-4'><a href="#" className='text-black hover:underline'>Privacy Policies</a></li>
            </ul>
          </div>

          <div className="md:w-1/3 space-y-4">
            <p className='text-gray-500 px-2'>Newsletter</p>
            <form className="flex items-center">
              <input type="email" className="border-b-2 border-gray-200 outline-none px-2 py-1 mr-2" placeholder="Enter Your Email Address" />
              <button type="submit" className="font-bold border-b-2 border-gray-200 py-1 px-2">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <hr className='py-3'/>
        {/* Copyright */}
        <div className="flex justify-center text-sm pb-5">
          <p>© 2023 COSTOSONO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
