import img from "../Images/img3.jpg";
import {Link} from 'react-router-dom'
const Carousel = ({
  isAdmin
}) => {
  return (
    <div className={`relative group bg-white shadow-md  overflow-hidden ${isAdmin?"mb-0":"mb-10"}`}>
      {/* Image */}

      <img src={img} alt="" className="w-full h-96  object-cover" />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-end text-white justify-center  space-y-2 ">

        <div className="pl-6 pr-9 py-8 rounded-xl space-y-3  text-black sm:mx-10 mx-5 lg:mx-20"
        style={{backgroundColor:"#fff4e4"} }>

            <p className="text-sm font-semibold">{!isAdmin? "New Arrivals":"Admin Panel"}</p>
            <h2 className="font-bold sm:text-3xl  text-2xl " style={{color: "#b88e2f" }}>
               {!isAdmin? <>DISCOVER OUR <br/>
                NEW COLLECTIONS</>:
                "Manage Product Catalog"}
            </h2>
            <p className="w-96 pb-4  text-sm">
              {!isAdmin? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta asperiores facere quos"
              :
              "Easily add new products to your store catalog and keep the inventory up to date."}
              </p>
            <Link to={!isAdmin?'/shop':'/admin/add'} className="bg-yellow-400 px-10 hover:bg-yellow-700 text-white font-semibold py-2 rounded-md "
            style={{ backgroundColor: "#b88e2f" }}>
                {!isAdmin?"Buy Now":"Add New Product"}
            </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
