import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bern Cookie Delights</h3>
            <p className="text-gray-300 mb-4">
              Handcrafted German cookies with 15 years of tradition in the heart of Bern.
            </p>
            <p className="text-gray-300">
              Kramgasse 45<br />
              3011 Bern, Switzerland
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Our History
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-4">
              Have questions or want to place a special order?
            </p>
            <a href="mailto:cookiegerman@gmail.com" className="text-amber-400 hover:text-amber-300 transition duration-300">
              cookiegerman@gmail.com
            </a>
            <div className="mt-4">
              <p className="text-gray-300 mb-2">Opening Hours:</p>
              <p className="text-gray-300">
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 5:00 PM<br />
                Sun: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bern Cookie Delights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}