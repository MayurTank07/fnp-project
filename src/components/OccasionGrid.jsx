const occasions = [
  { title: "Anniversary", img: "/src/assets/occasions/anniversary.jpg" },
  { title: "Romantic Flowers", img: "/src/assets/occasions/flowers.webp" },
  { title: "Wedding", img: "/src/assets/occasions/wedding.webp" },
  { title: "Gifts To Say Sorry", img: "/src/assets/occasions/sorry.webp" },
  { title: "Thinking Of Someone", img: "/src/assets/occasions/thinking.jpg" },
  { title: "For Girlfriend", img: "/src/assets/occasions/girlfriend.webp" },
  { title: "For Boyfriend", img: "/src/assets/occasions/boyfriend.webp" },
  { title: "Missing Someone", img: "/src/assets/occasions/missing.webp" },
];

export default function OccasionGrid() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Celebrate Love ❤️
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-x-6 gap-y-8">
          {occasions.map((item, index) => (
            <OccasionCard key={index} item={item} />
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex gap-5 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory">
          {occasions.map((item, index) => (
            <div key={index} className="snap-start">
              <OccasionCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function OccasionCard({ item }) {
  return (
    <div className="group w-[140px] md:w-auto cursor-pointer flex flex-col items-center">
      {/* Heart */}
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        {/* Background */}
        <div
          className="absolute inset-0 rounded-[45%] bg-gradient-to-br from-pink-100 to-pink-200
          group-hover:scale-105 transition-transform duration-300"
        />

        {/* Image */}
        <img
          src={item.img}
          alt={item.title}
          className="relative z-10 w-full h-full object-cover rounded-[45%]
          shadow-md group-hover:scale-110 group-hover:shadow-xl
          transition-all duration-300"
        />
      </div>

      {/* Title */}
      <p
        className="mt-3 text-sm md:text-base text-center font-medium text-gray-800
        group-hover:text-pink-600 transition-colors duration-300"
      >
        {item.title}
      </p>
    </div>
  );
}
