export default function ProductCard({ name, tagline, price, image }) {
  return (
    <div className="group cursor-pointer animate-fadeIn">
      <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

        <div className="absolute top-4 right-4 px-4 py-2 bg-blue-400 text-black font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {price}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{tagline}</p>
      </div>
    </div>
  );
}
