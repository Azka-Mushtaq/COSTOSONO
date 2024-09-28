const Filter = () => {
  return (
    <>
      {/* Filter and sorting bar */}
      <div className=" py-4 border-b border-gray-200" style={{backgroundColor:"#fff4e4"}}>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left: Filter and View Icons */}
          <div className="flex items-center space-x-4">
            {/* Filter button */}
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
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
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12v7a1 1 0 01-.447.894l-4 2A1 1 0 019 21v-9L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
              <span>Filter</span>
            </button>

            {/* Grid/List toggle buttons */}
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800">
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
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
             
            </div>
          </div>

          {/* Center: Results count */}
          <p className="text-sm text-gray-600 hidden md:flex">Showing 1–16 of 32 results</p>

          {/* Right: Show and Sort dropdowns */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <label htmlFor="show" className="mr-2 text-sm text-gray-600">
                Show
              </label>
              <select
                id="show"
                className="border border-gray-300 rounded-md text-sm py-1 px-2"
              >
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
              </select>
            </div>

            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                Sort by
              </label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md text-sm py-1 px-2"
              >
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
