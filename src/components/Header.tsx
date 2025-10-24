'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/aiwa-health.svg" 
                alt="Aiwa Health Logo" 
                className="h-8 md:h-10 lg:h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 -ml-8">
            <Link href="/consult" className="text-gray-700 hover:text-[#EA3F3F] px-3 py-2 text-sm font-medium transition-colors">
              Consult
            </Link>
            <Link href="/why-us" className="text-gray-700 hover:text-[#EA3F3F] px-3 py-2 text-sm font-medium transition-colors">
              Why us?
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#EA3F3F] focus:outline-none focus:text-[#EA3F3F]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/consult"
                className="text-gray-700 hover:text-[#EA3F3F] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Consult
              </Link>
              <Link
                href="/why-us"
                className="text-gray-700 hover:text-[#EA3F3F] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Why us?
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
