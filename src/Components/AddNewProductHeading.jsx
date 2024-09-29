import { Link } from "react-router-dom";

const AddNewProductHeading = () => {
  return (
    <>
      <div className="py-3 flex justify-center ">
        <h1 className="font-bold text-4xl text-center ">All Products</h1>

        <Link
          to="/admin/add"
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-600"
        >
          Add New
        </Link>
      </div>
    </>
  );
};

export default AddNewProductHeading;
