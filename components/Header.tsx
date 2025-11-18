'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Bern Cookie Delights
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition duration-300">
              About
            </Link>
            <Link href="/history" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Our History
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Products
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="pb-4 md:hidden">
            <Link href="/" className="block py-2 text-gray-700 hover:text-amber-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-amber-600 transition duration-300">
              About
            </Link>
            <Link href="/history" className="block py-2 text-gray-700 hover:text-amber-600 transition duration-300">
              Our History
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-amber-600 transition duration-300">
              Products
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}