import React from "react";
import { data } from "../utils/product";
import ProductCard from "../components/ProductCatalog/ProductCard";
const ProductCatalog = () => {
  return (
    <div className="text-center">
      <h2 className="text-[44px] font-serif">Product Catalog</h2>
      <div>Search</div>
      <div className="border-2 grid sm:grid-cols-2 p-[20px] md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
