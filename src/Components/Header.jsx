import img from "../Images/img9.jpg";

const Header = (props) => {
  return (
    <div className="relative group bg-white shadow-md  overflow-hidden">
      {/* Image */}

      <img src={img} alt="" className="w-full h-64 object-cover " style={{ filter: 'blur(5px)' }}/>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center text-white justify-center space-y-2">
        <h1 className="font-semibold  text-5xl">{props.name}</h1>


        
        <div className="flex items-center space-x-2 text-xl">
          <p className="text-sm">Home</p>
          <span className="text-white">&gt; </span>
          <p className="text-gray-300 text-sm">{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
