//import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Classic Chocolate Chip",
      description: "Our timeless recipe with premium Swiss chocolate chunks and a hint of vanilla. Crispy edges with a soft, chewy center.",
      price: "€8.99",
      image: "/images/cookie1.jpg"
    },
    {
      id: 2,
      name: "Almond Honey Delight",
      description: "A perfect blend of local Bern honey and toasted almonds. These cookies have a delicate sweetness and satisfying crunch.",
      price: "€9.99",
      image: "/images/cookie2.jpg"
    },
    {
      id: 3,
      name: "Spiced Gingerbread",
      description: "Traditional German gingerbread with our secret spice blend. Perfect with a cup of tea on a cold day.",
      price: "€7.99",
      image: "/images/cookie3.jpg"
    },
    {
      id: 4,
      name: "Double Chocolate Fudge",
      description: "For the chocolate lovers! Rich cocoa dough loaded with dark chocolate chunks and drizzled with chocolate fudge.",
      price: "€10.99",
      image: "/images/cookie4.jpg"
    },
    {
      id: 5,
      name: "Lemon Zest Shortbread",
      description: "Buttery shortbread with fresh lemon zest and a dusting of powdered sugar. A refreshing twist on a classic.",
      price: "€8.49",
      image: "/images/cookie1.jpg"
    },
    {
      id: 6,
      name: "Hazelnut Caramel Crunch",
      description: "Roasted hazelnuts and caramelized sugar create a delightful crunch in these rich, buttery cookies.",
      price: "€9.49",
      image: "/images/cookie2.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Our Cookie Collection</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Each cookie is handcrafted with love using the finest local ingredients. From traditional recipes to innovative creations, there's a perfect treat for every palate.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-64 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Cookie Boxes & Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Assorted Cookie Box</h3>
              <p className="text-gray-600 mb-4">
                A selection of our most popular cookies, beautifully packaged. Perfect for sharing or as a gift.
              </p>
              <ul className="text-gray-600 mb-4">
                <li>• Small (6 cookies): €14.99</li>
                <li>• Medium (12 cookies): €24.99</li>
                <li>• Large (24 cookies): €44.99</li>
              </ul>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
                Order Now
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cookie Subscription</h3>
              <p className="text-gray-600 mb-4">
                Never run out of your favorite treats! Our monthly subscription delivers fresh cookies to your door.
              </p>
              <ul className="text-gray-600 mb-4">
                <li>• Monthly delivery of 12 cookies</li>
                <li>• Exclusive seasonal flavors</li>
                <li>• €19.99 per month</li>
              </ul>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Special Orders</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Planning an event or looking for a custom gift? We offer special orders for corporate events, weddings, and celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:cookiegerman@gmail.com" className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
              Contact Us About Special Orders
            </a>
            <Link href="/about" className="inline-block px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}