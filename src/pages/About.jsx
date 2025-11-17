import { Target, Sparkles, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-6xl font-bold text-black mb-4 tracking-tighter">
            About <span className="text-blue-400">UrbanEdge</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bringing bold, confident, and modern fashion for the next-generation man.
          </p>
        </div>

        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] bg-gray-100 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
              alt="Brand Story"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black tracking-tight">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              UrbanEdge was born from a vision to redefine men's fashion for the modern era.
              We recognized a gap in the market for clothing that combines the precision of
              traditional tailoring with the bold, expressive energy of streetwear.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 2023, we've quickly become the go-to brand for Gen-Z men who
              refuse to compromise between style and comfort. Every piece we create tells
              a story of confidence, individuality, and modern masculinity.
            </p>
          </div>
        </section>

        <section className="mb-24 bg-black text-white py-20 px-12 -mx-6 md:mx-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Mission</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Empowering men to express their authentic selves through fashion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-400 rounded-full flex items-center justify-center">
                <Target size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Minimal</h3>
              <p className="text-gray-400 leading-relaxed">
                Clean aesthetics that speak volumes. Less is more when every detail matters.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-400 rounded-full flex items-center justify-center">
                <Sparkles size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Tailored</h3>
              <p className="text-gray-400 leading-relaxed">
                Precision cuts and perfect fits that enhance your natural silhouette.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-400 rounded-full flex items-center justify-center">
                <Users size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Expressive</h3>
              <p className="text-gray-400 leading-relaxed">
                Bold choices that celebrate individuality and personal style.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We create pieces that reflect genuine style, not fleeting trends.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium materials and expert craftsmanship in every stitch.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Pushing boundaries while respecting tradition.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">Inclusivity</h3>
              <p className="text-gray-600 leading-relaxed">
                Fashion for every body, every style, every story.
              </p>
            </div>
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
