import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">About Bern Cookie Delights</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Passion for Perfect Cookies</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Bern Cookie Delights, we believe that a perfect cookie is more than just a treat—it's a moment of joy. For over 15 years, our family-owned bakery in the heart of Bern, Germany has been crafting cookies using traditional recipes passed down through generations.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We source only the finest local ingredients, from Swiss chocolate to alpine honey, ensuring every bite delivers the authentic taste of German baking excellence.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              What started as a small family operation has grown into a beloved local institution, but our commitment to quality and tradition remains unchanged.
            </p>
            <Link href="/history" className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300 w-fit">
              Discover Our History
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.jpg"
              alt="Our bakery in Bern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🍪</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Ingredients</h3>
            <p className="text-gray-600">We never compromise on quality. Every ingredient is carefully selected to ensure the perfect taste and texture.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Bakers</h3>
            <p className="text-gray-600">Our team of skilled bakers brings years of experience and passion to every batch of cookies.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Baked with Love</h3>
            <p className="text-gray-600">Every cookie is crafted with care and attention to detail, ensuring a delightful experience with every bite.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Visit Our Bakery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Location</h3>
              <p className="text-gray-600 mb-6">
                Kramgasse 45<br />
                3011 Bern, Switzerland<br />
                <a href="mailto:cookiegerman@gmail.com" className="text-amber-600 hover:text-amber-700">cookiegerman@gmail.com</a>
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Opening Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 5:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our products or want to place a special order? We'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:cookiegerman@gmail.com" className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
                  Email Us
                </a>
                <Link href="/products" className="inline-block px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-300">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}