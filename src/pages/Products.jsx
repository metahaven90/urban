import ProductCard from '../components/ProductCard';

export default function Products() {
  const pantsCollection = [
    {
      id: 1,
      name: 'Tailored Fit Pants',
      tagline: 'Classic precision meets modern comfort',
      price: '$129',
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    },
    {
      id: 2,
      name: 'Bell-Bottom Pants',
      tagline: 'Retro vibes with contemporary edge',
      price: '$149',
      image: '/urban/images/bell_bottom.png',
    },

    {
      id: 3,
      name: 'Bootcut Pants',
      tagline: 'Timeless silhouette for every occasion',
      price: '$139',
      image: '/urban/images/bootcut.png',
    },
    
  ];

  const jacketsCollection = [
    {
      id: 4,
      name: 'Crop Leather Jacket',
      tagline: 'Bold statement piece for the fearless',
      price: '$299',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
    },
    {
      id: 5,
      name: 'Biker Leather Jacket',
      tagline: 'Rebellious spirit, refined attitude',
      price: '$349',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl font-bold text-black mb-4 tracking-tighter">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600">
            Curated pieces for the modern gentleman
          </p>
        </div>

        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black tracking-tight mb-2">
              Pants Collection
            </h2>
            <div className="w-24 h-1 bg-blue-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pantsCollection.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black tracking-tight mb-2">
              Jackets Collection
            </h2>
            <div className="w-24 h-1 bg-blue-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jacketsCollection.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2024 UrbanEdge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
