export default function Card({ data }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2">
          {data.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="font-semibold">₹{data.price}</span>
          <span className="line-through text-gray-400 text-sm">
            ₹{data.oldPrice}
          </span>
        </div>

        <p className="text-sm text-green-600 mt-1">
          ⭐ {data.rating}
        </p>
      </div>
    </div>
  );
}
