import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white relative" style={{ backgroundColor: '#252525' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Follow Us:</h3>
            <div className="flex space-x-2">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src="/twitter.svg" alt="Twitter" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links - Simple list on small screens */}
          <div className="space-y-3">
            <Link href="/" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
              Home
            </Link>
            <Link href="/consult" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
              Consult
            </Link>
            <Link href="/why-us" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
              Why Us
            </Link>
            <Link href="/corporate" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
              Corporate Inquiries
            </Link>
            <Link href="/blog" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
              Blog
            </Link>
          </div>
          
          {/* Logo Section - Below navigation on mobile */}
          <div className="flex items-center">
            <img 
              src="/footer-logo.svg" 
              alt="Aiwa Health Logo" 
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Follow Us:</h3>
              <div className="flex space-x-2">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                  <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                  <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                  <img src="/twitter.svg" alt="Twitter" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain" />
                </a>
              </div>
            </div>
            
            {/* Logo Section */}
            <div className="flex items-center mt-20 md:mt-32">
              <img 
                src="/footer-logo.svg" 
                alt="Aiwa Health Logo" 
                className="h-8 md:h-10 lg:h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="flex justify-end">
            <div className="space-y-6 mr-8">
              <Link href="/" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
                Home
              </Link>
              <Link href="/consult" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
                Consult
              </Link>
              <Link href="/why-us" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
                Why Us
              </Link>
              <Link href="/corporate" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
                Corporate Inquiries
              </Link>
              <Link href="/blog" className="block text-white hover:text-gray-300 transition-colors pb-2 border-b border-gray-600">
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-sm text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              © AIWA Health
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                Terms & Conditions
              </Link>
              <Link href="/cancellation" className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}