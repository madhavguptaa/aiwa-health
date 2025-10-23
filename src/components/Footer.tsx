import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white relative" style={{ backgroundColor: '#252525' }}>
      {/* AIWA Watermark Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[12rem] font-bold leading-none" style={{ fontFamily: 'Raleway, sans-serif' }}>AIWA</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us:</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/twitter.svg" alt="Twitter" className="w-8 h-8 object-contain" />
                </a>
              </div>
            </div>
            
            {/* Logo Section */}
            <div className="flex items-center">
              <img 
                src="/aiwa-health.svg" 
                alt="Aiwa Health Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-gray-300">
              All India Wellness Association
            </p>
          </div>

          {/* Right Section - Navigation */}
          <div className="flex justify-end">
            <div className="space-y-2">
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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-end">
            <p className="text-sm text-gray-400">
              Copyright © AIWA Health
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}