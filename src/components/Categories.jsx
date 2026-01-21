import cake from "../assets/categories/cake.png";
import anniversary from "../assets/categories/anniversary.png";
import flowers from "../assets/categories/flowers.png";
import birthday from "../assets/categories/birthday.png";

const categories = [
  { id: 1, title: "Cakes", img: cake },
  { id: 2, title: "Anniversary", img: anniversary },
  { id: 3, title: "Flowers", img: flowers },
  { id: 4, title: "Birthday Gifts", img: birthday },
];

export default function Categories() {
  return (
    <div className="w-full py-10 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
        {categories.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer rounded-2xl bg-gradient-to-b from-yellow-50 to-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center p-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <p className="text-center font-semibold text-gray-800 pb-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
