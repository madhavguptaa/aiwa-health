import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Shield, Users, Zap, CheckCircle } from 'lucide-react'

export default function Consult() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-5xl font-bold text-black mb-6" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '55px' }}>
                Find the Right Therapist for You
              </h1>
              <p className="text-xl text-[#616161] mb-6 italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Because your mental well-being deserves care that fits you.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                At AIWA Health, we connect you with verified mental health professionals who understand your needs. Whether you're facing anxiety, burnout, relationship issues, or just need someone to talk to — your healing starts here.
              </p>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/home-hero.svg" 
                  alt="Therapy Session" 
                  className="w-3/4 h-auto rounded-lg shadow-lg ml-8"
                />
              </div>
              {/* SVG Gradient Overlay */}
              <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-50 z-0">
                <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute">
                  <defs>
                    <radialGradient id="heroGradient" cx="70%" cy="70%" r="60%">
                      <stop offset="0%" stopColor="#FFC107" stopOpacity="0.6"/>
                      <stop offset="40%" stopColor="#E22D2D" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#4D8BE9" stopOpacity="0.2"/>
                    </radialGradient>
                  </defs>
                  <circle cx="400" cy="400" r="300" fill="url(#heroGradient)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AIWA Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides everything you need to modernize your healthcare practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#EA3F3F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">
                HIPAA-compliant platform with enterprise-grade security to protect patient data.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-[#EA3F3F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered</h3>
              <p className="text-gray-600">
                Streamlined patient management with intuitive interfaces for better care delivery.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-[#EA3F3F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">
                Lightning-fast performance with 99.9% uptime guarantee for uninterrupted service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#EA3F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust AIWA Health for their digital transformation.
          </p>
          <button className="bg-white text-[#EA3F3F] px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
