export default function Lookbook() {
  const looks = [
    {
      id: 1,
      title: 'Tailored Elegance',
      description: 'Tailored pants + oversized tee',
      image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg',
    },
    {
      id: 2,
      title: 'Street Revolution',
      description: 'Bell-bottom pants + leather jacket',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    },
    {
      id: 3,
      title: 'Urban Fusion',
      description: 'Bootcut pants + crop jacket',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    },
    {
      id: 4,
      title: 'Bold Minimalism',
      description: 'Monochrome tailored ensemble',
      image: 'https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg',
    },
    {
      id: 5,
      title: 'Night Shift',
      description: 'Leather on leather statement',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
    },
    {
      id: 6,
      title: 'Modern Classic',
      description: 'Timeless pieces, fresh attitude',
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tighter">
            Lookbook <span className="text-blue-400">2024</span>
          </h1>
          <p className="text-xl text-gray-400">
            Style inspiration for the modern man
          </p>
        </div>

        {/* First two large images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[600px] overflow-hidden group animate-fadeIn">
            <img
              src={looks[0].image}
              alt={looks[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-bold mb-2 tracking-tight">{looks[0].title}</h2>
              <p className="text-gray-300 text-lg">{looks[0].description}</p>
            </div>
          </div>

          <div className="relative h-[600px] overflow-hidden group animate-fadeIn">
            <img
              src={looks[1].image}
              alt={looks[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-bold mb-2 tracking-tight">{looks[1].title}</h2>
              <p className="text-gray-300 text-lg">{looks[1].description}</p>
            </div>
          </div>
        </div>

        {/* Big single center image */}
        <div className="relative h-[700px] overflow-hidden group mb-12 animate-fadeIn">
          <img
            src={looks[2].image}
            alt={looks[2].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 text-white">
            <h2 className="text-5xl font-bold mb-3 tracking-tight">{looks[2].title}</h2>
            <p className="text-gray-300 text-xl">{looks[2].description}</p>
          </div>
        </div>

        {/* Remaining 3 images */}
        <div className="grid md:grid-cols-3 gap-8">
          {looks.slice(3).map((look) => (
            <div key={look.id} className="relative h-[500px] overflow-hidden group animate-fadeIn">
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1 tracking-tight">{look.title}</h3>
                <p className="text-gray-300 text-sm">{look.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2024 UrbanEdge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
