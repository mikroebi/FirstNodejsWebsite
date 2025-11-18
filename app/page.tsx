//import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Freshly baked cookies"
            className="w-full h-full object-cover"
             
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Bern Cookie Delights</h1>
          <p className="text-xl md:text-2xl mb-8">Handcrafted German cookies with 15 years of tradition</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
              Explore Our Cookies
            </Link>
            <Link href="/about" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold rounded-lg transition duration-300">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Signature Cookies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 relative">
                <img
                  src="/images/cookie1.jpg"
                  alt="Classic Chocolate Chip"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classic Chocolate Chip</h3>
                <p className="text-gray-600 mb-4">Our timeless recipe with premium Swiss chocolate chunks.</p>
                <Link href="/products" className="text-amber-600 font-semibold hover:text-amber-700">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 relative">
                <img
                  src="/images/cookie2.jpg"
                  alt="Almond Honey Delight"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Almond Honey Delight</h3>
                <p className="text-gray-600 mb-4">A perfect blend of local honey and toasted almonds.</p>
                <Link href="/products" className="text-amber-600 font-semibold hover:text-amber-700">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 relative">
                <img
                  src="/images/cookie3.jpg"
                  alt="Spiced Gingerbread"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spiced Gingerbread</h3>
                <p className="text-gray-600 mb-4">Traditional German gingerbread with our secret spice blend.</p>
                <Link href="/products" className="text-amber-600 font-semibold hover:text-amber-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience 15 Years of Cookie Excellence</h2>
          <p className="text-xl mb-8">From our family bakery in Bern to your home, every bite tells a story.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/history" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
              Our Story
            </Link>
            <Link href="/about" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold rounded-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}