import { Mail, Instagram, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-6xl font-bold text-black mb-4 tracking-tighter">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">
                Let's Connect
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Have questions about our collection? Want to collaborate?
                Or just want to say hello? Drop us a message and we'll get back
                to you as soon as possible.
              </p>
            </div>

            {/* Contact Icons */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">Email</h3>
                  <p className="text-gray-600">hello@urbanedge.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">Instagram</h3>
                  <p className="text-gray-600">@urbanedge.official</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">Showroom</h3>
                  <p className="text-gray-600">
                    123 Fashion District<br />
                    Los Angeles, CA 90014
                  </p>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="pt-8">
              <h3 className="text-xl font-bold text-black mb-4">Store Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                <p>Saturday: 11:00 AM - 7:00 PM</p>
                <p>Sunday: 12:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 focus:border-blue-400 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 focus:border-blue-400 outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 focus:border-blue-400 outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 focus:border-blue-400 outline-none transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-400 text-black font-bold hover:bg-blue-300 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
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
