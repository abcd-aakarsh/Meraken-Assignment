import React, { useState } from "react";
import data from "../utils/product.json";
import ProductCard from "../components/ProductCatalog/ProductCard";

const ProductCatalog = () => {
  const [searchText, setSearchText] = useState("");
  const [productList] = useState(data);
  const [filteredList, setFilteredList] = useState(data);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // Handle search functionality
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    filterProducts(text, selectedCategories, sortOrder);
  };

  const resetList = () => {
    setSearchText("");
    setSelectedCategories([]);
    setSortOrder("");
    setFilteredList(productList);
  };

  // Handle category selection
  const toggleCategory = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    filterProducts(searchText, updatedCategories, sortOrder);
  };

  // Handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
    filterProducts(searchText, selectedCategories, order);
  };

  // Filter and sort products
  const filterProducts = (text, categories, order) => {
    let updatedList = productList;

    // Filter by search text
    if (text) {
      updatedList = updatedList.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    // Filter by categories
    if (categories.length > 0) {
      updatedList = updatedList.filter((product) =>
        categories.includes(product.category.toLowerCase())
      );
    }

    //Sort by price
    if (order === "asc") {
      updatedList = updatedList.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      updatedList = updatedList.sort((a, b) => b.price - a.price);
    }

    setFilteredList(updatedList);
  };

  return (
    <div className="text-center">
      <h2 className="md:text-[54px] text-[40px] mb-4 lg:mb-8 font-serif leading-tight">
        Product Catalog
      </h2>

      {/* Filters and Search Section */}
      <div className="mb-8 max-w-[1400px] bg-stone-800 px-4 justify-center py-1 lg:rounded-full mx-auto flex flex-wrap items-center lg:justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-1  lg:gap-4">
          {["electronics", "clothing", "home", "footwear", "accessories"]
            .slice(0, 3)
            .map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-6 py-2 text-xs md:text-lg border-2 rounded-full ${
                  selectedCategories.includes(category)
                    ? "bg-white text-black"
                    : " text-white hover:bg-white hover:text-black"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
        </div>

        {/* Search Bar */}
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <input
            name="search"
            value={searchText}
            placeholder="Enter Item Name"
            className="border-2 border-gray-600 px-6 py-3 text-sm md:text-lg rounded-full min-w-[250px] w-full md:w-auto"
            onChange={handleSearch}
          />
          <button
            onClick={resetList}
            className="px-6 py-3 border-2 transition-all duration-100 border-[#B0802E] text-[#B0802E] hover:text-white hover:bg-[#B0802E] text-sm md:text-lg rounded-full"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Sorting Options */}
      {/* <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleSort("asc")}
          className={`px-6 py-2 border-2 text-sm md:text-lg rounded-full ${
            sortOrder === "asc"
              ? "bg-green-600 text-white"
              : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          }`}
        >
          Price: Low to High
        </button>
        <button
          onClick={() => handleSort("desc")}
          className={`px-6 py-2 border-2 rounded-full ${
            sortOrder === "desc"
              ? "bg-red-600 text-white"
              : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          }`}
        >
          Price: High to Low
        </button>
      </div> */}

      {/* Product List Section */}
      <div className="bg-zinc-400 rounded-3xl grid sm:grid-cols-2 p-[20px] md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredList.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
