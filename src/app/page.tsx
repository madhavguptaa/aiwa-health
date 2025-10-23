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

      {/* Why Choose AIWA Health Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Why Choose AIWA Health?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Affordable Sessions */}
            <div className="bg-pink-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Affordable Sessions –
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Quality therapy that fits your budget
                </p>
                <div className="flex justify-center">
                  <div className="w-32 h-48 bg-black rounded-2xl p-2">
                    <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-blue-200 rounded-full mb-2"></div>
                      <div className="flex space-x-1">
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Qualified Experts */}
            <div className="bg-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Qualified Experts –
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Verified, licensed therapists for every need.
                </p>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-48 bg-black rounded-2xl p-2">
                      <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-blue-200 rounded-full mb-2"></div>
                        <div className="bg-blue-100 rounded-lg p-2 text-xs">
                          Anna Hi Dr. Williams, I'm ready for my check-up
                        </div>
                      </div>
                    </div>
                    <div className="absolute -left-2 top-4 w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Avi Kabra / Flexible Access */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Dr. Avi Kabra
                </h4>
                <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Cognitive Behavioral Therapist
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Flexible Access –
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Talk through chat, call, or video anytime.
                </p>
              </div>
            </div>

            {/* 100% Confidential */}
            <div className="bg-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="text-left relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  100% Confidential –
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Private, encrypted online sessions.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="bg-yellow-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="text-left relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  24/7 Support –
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  We're here when you need us most.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}