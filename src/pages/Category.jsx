import React from "react";
import { useParams, Link } from "react-router-dom";
import { products, categories } from "../data";

const Category = () => {
  const { type } = useParams();  // cake

  // check if URL category is valid
  const isValidCategory = categories.some((cat) => cat.id === type  //true
  );

  // filter products safely
  const filteredProducts = isValidCategory // buttersctoch 
    ? products.filter((item) => item.category === type)
    : products;

  // active category label
  const activeLabel = isValidCategory ? categories.find((cat) => cat.id === type)?.label : "All Products";

  return (
    <div className="w-full min-h-screen bg-white">

      {/* PAGE HEADER */}
      <div className="bg-pink-50 py-12 text-center">
        <h1 className="text-4xl font-bold text-pink-600">
          {activeLabel}
        </h1>
        <p className="text-gray-600 mt-2">
          Choose the perfect gift for every occasion
        </p>
      </div>

      {/* CATEGORY FILTERS (ALWAYS VISIBLE) */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <Link
            key={cat.id} // key = anni
            to={`/category/${cat.id}`}
            className={`px-6 py-2 rounded-full border font-medium transition
              ${
                cat.id === type
                  ? "bg-pink-600 text-white border-pink-600"
                  : "border-gray-300 text-gray-700 hover:bg-pink-50"
              }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-pink-600 font-bold">
                    ₹{item.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ₹{item.oldPrice}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  ⭐ {item.rating}
                </p>

                <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}

      </div>
    </div>
  );
};

export default Category;
