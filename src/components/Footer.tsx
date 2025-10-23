import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white relative" style={{ backgroundColor: '#252525' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us:</h3>
              <div className="flex space-x-2">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/twitter.svg" alt="Twitter" className="w-8 h-8 object-contain" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain" />
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

        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © AIWA Health
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cancellation" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}