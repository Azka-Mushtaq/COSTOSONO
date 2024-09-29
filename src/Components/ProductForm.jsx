import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {

// const history=useHistory();
const navigate = useNavigate();

  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isNewProduct, setIsNewProduct] = useState(true);
  const [colors, setColors] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // New state for image preview
  const [description, setDescription] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleColorChange = (e) => {
    const selectedColors = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setColors(selectedColors);
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    "id": 2,
      "name": "Lumina Desk Lamp",
      "description": "Adjustable LED desk lamp with touch control",
      "price": 120,
      "date": "05-10-2024",
      "quantity": 10,
      "isProductNew":false,
      colors:[]
      "image": "https://example.com/image2.jpg"
    }
    */
    let date = new Date();
    const product = {
      name,
      description,
      price,
      date,
      quantity,
      isNewProduct,
      colors,
      image,
    };

    setIsPending(true);
    console.log("Product:", product);

    //Posting data to json server
    fetch('http://localhost:8000/products',
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(product)
        }).then(()=>{
            console.log("Data Added Successfully")
            setIsPending(false);
        })
        navigate('/admin');
  };

  return (
    <div className="container mx-auto my-10 p-6 w-1/2">
      <h2 className="text-3xl font-bold mb-5">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid-2 gap-7 ">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex grid-2 gap-3">
          <div className="mb-4 w-1/2">
            <label htmlFor="price" className="block text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
              required
            />
          </div>

          <div className="mb-4 w-1/2">
            <label htmlFor="quantity" className="block text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="isNewProduct" className="block text-gray-700">
            Is this a new product?
          </label>
          <select
            id="isNewProduct"
            value={isNewProduct}
            onChange={(e) => setIsNewProduct(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="colors" className="block text-gray-700">
            Available Colors
          </label>
          <select
            id="colors"
            multiple
            onChange={handleColorChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none text-gray-600 focus:ring focus:ring-gray-400"
          >
            <option className="hover:text-white hover:bg-gray-400 " value="red">
              Red
            </option>
            <option
              value="green"
              className="hover:text-white hover:bg-gray-400 "
            >
              Green
            </option>
            <option
              value="blue"
              className="hover:text-white hover:bg-gray-400 "
            >
              Blue
            </option>
            <option
              value="yellow"
              className="hover:text-white hover:bg-gray-400 "
            >
              Yellow
            </option>
            <option
              value="black"
              className="hover:text-white hover:bg-gray-400 "
            >
              Black
            </option>
            <option
              value="white"
              className="hover:text-white hover:bg-gray-400 "
            >
              White
            </option>
          </select>
          <p className="text-sm text-gray-500">
            Hold down the Ctrl (Windows) or Command (Mac) button to select
            multiple options.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image of Product</label>
          <div
            {...getRootProps()}
            className="mt-1 p-4 border-2 border-dashed border-gray-400 rounded cursor-pointer hover:bg-yellow-50"
          >
            <input {...getInputProps()} />
            <p className="text-center text-gray-500">
              Drag and drop files here, or click to select files
            </p>
          </div>
          {imagePreview && (
            <div className="mt-2 flex items-center p-2 border border-gray-300 rounded bg-gray-100">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-16 h-16 object-cover rounded mr-2"
              />
              <div className="flex-grow">
                <p className="font-semibold text-gray-800">{image.name}</p>
                <p className="text-gray-600">
                  {(image.size / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setImagePreview(null);
                }}
                className="text-red-500 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {!isPending && (
          <button
            type="submit"
            className="w-full text-white py-2 rounded  focus:outline-none focus:ring focus:ring-gray-400"
            style={{ backgroundColor: "#b88e2f" }}
          >
            Add Product
          </button>
        )}

        {isPending && (
          <button
            disabled
            type="submit"
            className="w-full text-white py-2 rounded  focus:outline-none focus:ring focus:ring-gray-400"
            style={{ backgroundColor: "#b88e2f" }}
          >
            Adding Product...
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
