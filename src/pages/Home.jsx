import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg')] bg-cover bg-center opacity-20"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-8">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-400 font-medium tracking-wide">NEW COLLECTION 2025</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
            Redefining the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Modern Man's Style
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Tailored fits. Bold silhouettes. Gen-Z approved designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="group px-8 py-4 bg-blue-400 text-black font-semibold rounded-none hover:bg-blue-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Shop Pants
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="group px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-none hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              Shop Jackets
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl text-blue-400 font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Minimal</h3>
              <p className="text-gray-600 leading-relaxed">Clean lines, sophisticated cuts, effortless style</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl text-blue-400 font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Tailored</h3>
              <p className="text-gray-600 leading-relaxed">Precision fit, modern silhouettes, refined details</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl text-blue-400 font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Expressive</h3>
              <p className="text-gray-600 leading-relaxed">Bold choices, confident attitude, unique identity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] bg-gray-800 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
              alt="Collection Preview"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white tracking-tighter leading-tight">
              The Art of<br />
              <span className="text-blue-400">Modern Tailoring</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every piece in our collection is designed with the modern man in mind.
              From the boardroom to the streets, UrbanEdge delivers versatility
              without compromising on style.
            </p>
            <button
              onClick={() => onNavigate('lookbook')}
              className="group mt-8 px-8 py-4 bg-transparent text-white font-semibold border-2 border-blue-400 rounded-none hover:bg-blue-400 hover:text-black transition-all duration-300 inline-flex items-center gap-2"
            >
              View Lookbook
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2024 UrbanEdge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
