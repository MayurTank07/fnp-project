import { useState } from "react";
import { categories, products } from "../data";
import Card from "./Card";

export default function TailoredOccasions() {
  const [activeCategory, setActiveCategory] = useState("cake");

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="w-full py-12 bg-[#fafaf5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Tailored For Your Occasions
        </h2>

        {/* Category Tabs */}
        <div className="flex gap-6 border-b mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pb-3 whitespace-nowrap font-medium transition relative
                ${
                  activeCategory === cat.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {cat.label}

              {activeCategory === cat.id && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#4b5320] rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
