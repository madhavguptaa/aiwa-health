import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Prioritizing Your Mental Well-being Every Day.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Discover personalized support, expert guidance, and resources designed to help you feel your best—mentally, emotionally, and physically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#EA3F3F] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#D63636] transition-colors">
                  Book Appointment
                </button>
                <button className="text-[#EA3F3F] px-8 py-3 text-lg font-medium hover:text-[#D63636] transition-colors">
                  Join Live Session...
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/home-hero.svg" 
                  alt="Mental Health Support" 
                  className="w-full h-auto rounded-3xl shadow-lg"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
              {/* SVG Gradient Overlay */}
              <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-50 z-0">
                <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute">
                  <defs>
                    <radialGradient id="homeGradient" cx="70%" cy="70%" r="60%">
                      <stop offset="0%" stopColor="#FFC107" stopOpacity="0.6"/>
                      <stop offset="40%" stopColor="#E22D2D" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#4D8BE9" stopOpacity="0.2"/>
                    </radialGradient>
                  </defs>
                  <circle cx="400" cy="400" r="300" fill="url(#homeGradient)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Because Your <em>Mental Health Deserves</em><br />
              <em>Attention—</em>Today, Tomorrow, And<br />
              Always.
            </h2>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                AIWA Health (All India Wellness Association) is a dedicated <em>mental health and wellness platform connecting individuals</em> with certified therapists.
              </p>
              <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We make therapy accessible, confidential, and affordable — empowering people to care for their mental and emotional well-being from anywhere.
              </p>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors flex items-center">
                Explore Article
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <img 
                src="/home-hero.svg" 
                alt="Therapist Consultation" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Testimonial Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <img 
                      src="/home-hero.svg" 
                      alt="Dr. Shreya Gupta" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Dr. Shreya Gupta</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  "AIWA helps me reach people who might not seek therapy, making mental wellness accessible and effective."
                </p>
              </div>
              
              {/* Heart Icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Heart size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}