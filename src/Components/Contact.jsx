const Contact = () => {
    const myInputStyle = {
      width: "400px",
      height: "50px",
    };
  
    return (
      <>
        {/* Body Section */}
        <div className="container flex flex-col items-center justify-center mt-10 space-y-20 mx-auto mb-10">
          <div className="text-center ">
            <h2 className="font-bold text-3xl">Get In Touch With Us</h2>
            <p className="text-gray-500 my-4">
              For more information about our products and services, please do not
              forget to drop <br />
              us an email. Our staff is always there to help out. Do not hesitate.
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row  my-10  grid-2 gap-40">
            {/* Left side: Address, Phone, Working Time */}
            <div className=" mb-10 md:mb-0 md:mr-10  ">
              <div className="mb-6">
                <h5 className="font-bold text-lg flex items-center">
                  <i className="bi bi-geo-alt-fill mr-3"></i> Address
                </h5>
                <p className="ml-8">
                  236 5th SE Avenue, New <br /> York, NY 10000, United <br />{" "}
                  States
                </p>
              </div>
              <div className="mb-6">
                <h5 className="font-bold text-lg flex items-center">
                  <i className="bi bi-telephone-fill mr-3"></i> Phone
                </h5>
                <p className="ml-8 text-black mb-1">(Mobile) +(84) 546-890</p>
                <p className="ml-8 text-black">(Hotline) +(84) 456-890</p>
              </div>
              <div className="mb-6">
                <h5 className="font-bold text-lg flex items-center">
                  <i className="bi bi-clock-fill mr-3"></i> Working Time
                </h5>
                <p className="ml-8 text-black">
                  Mon-Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat-Sun: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
  
            {/* Right side: Form */}
            <div className="ml-9 ">
              <form className="space-y-6">
                <div className="space-y-3">
                  <p className="font-semibold ">Your Name</p>
                  <input
                    type="text"
                    className=" p-3 w-full text-gray-500 rounded-lg border border-gray-300 "
                    placeholder="ABC"
                    style={myInputStyle}
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-semibold">Email Address</p>
                  <input
                    type="email"
                    className=" p-3 text-gray-500 rounded-lg border border-gray-300"
                    placeholder="ABC@def.com"
                    style={myInputStyle}
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-semibold">Subject</p>
                  <input
                    type="text"
                    className="p-3 text-gray-500 rounded-lg border border-gray-300"
                    placeholder="This is optional"
                    style={myInputStyle}
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-semibold">Message</p>
                  <textarea
                    className=" p-3 text-gray-500 rounded-lg border border-gray-300"
                    rows="4"
                    placeholder="Hi I'd like to ask about"
                    style={{ width: "400px" }}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-yellow-400 w-2/3 text-white py-3 rounded-lg"
                    style={{ backgroundColor: "#b88e2f", color: "white" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Contact;