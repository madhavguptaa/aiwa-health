'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WhyUs() {
  useScrollAnimation()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left scroll-fade-in-left" data-scroll-animation>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-4 md:mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Why Choose AIWA Health?
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Your trusted partner in accessible, affordable, and compassionate mental healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="/consult" className="bg-[#EA3F3F] text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-medium hover:bg-[#D63636] transition-colors text-center">
                  Get Started Today
                </a>
                <button 
                  onClick={() => {
                    const nextSection = document.getElementById('mission-section');
                    if (nextSection) {
                      nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-[#EA3F3F] px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:text-[#D63636] transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative scroll-fade-in-right" data-scroll-animation>
              <div className="relative z-10">
                <img 
                  src="/why-us-hero.svg" 
                  alt="Online Consultation" 
                  className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ borderRadius: '3rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission-section" className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-fade-in" data-scroll-animation>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              At AIWA Health, we're redefining mental wellness across India. Our mission is to make therapy simple, secure, and stigma-free — connecting you with verified professionals who care. Whether you're seeking individual therapy, workplace wellness, or emotional support, AIWA Health ensures that expert help is always within reach.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Pan-India Reach */}
                  <div className="text-center p-6 group scroll-stagger-1" data-scroll-animation>
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src="/pan-india.svg"
                        alt="Pan-India Reach"
                        className="w-16 h-16 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EA3F3F] transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Pan-India Reach
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Access therapy anywhere, anytime.
                    </p>
                  </div>

            {/* Verified Therapists */}
            <div className="text-center p-6 group scroll-stagger-2" data-scroll-animation>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/verified-experts.svg"
                  alt="Verified Therapists"
                  className="w-16 h-16 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EA3F3F] transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Verified Therapists
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                All professionals are vetted and certified.
              </p>
            </div>

            {/* Affordable & Transparent Plans */}
            <div className="text-center p-6 group scroll-stagger-3" data-scroll-animation>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/plans.svg"
                  alt="Affordable & Transparent Plans"
                  className="w-16 h-16 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EA3F3F] transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Affordable & Transparent Plans
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                No hidden costs, flexible payment.
              </p>
            </div>

            {/* Confidential & Safe */}
            <div className="text-center p-6 group scroll-stagger-4" data-scroll-animation>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/confidential-and-safe.svg"
                  alt="Confidential & Safe"
                  className="w-16 h-16 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EA3F3F] transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Confidential & Safe
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Private sessions protected by secure encryption.
              </p>
            </div>

            {/* Corporate Wellness Programs */}
            <div className="text-center p-6 group scroll-stagger-1" data-scroll-animation>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/corporate-wellnes-programme.svg"
                  alt="Corporate Wellness Programs"
                  className="w-16 h-16 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EA3F3F] transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Corporate Wellness Programs
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Tailored mental health support for teams.
              </p>
            </div>

            {/* 24/7 Assistance */}
            <div className="text-center p-6 group scroll-stagger-2" data-scroll-animation>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/247-assistance.svg"
                  alt="24/7 Assistance"
                  className="w-16 h-16 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EA3F3F] transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                24/7 Assistance
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Because mental health doesn't keep office hours.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA Section with Team Photo */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative scroll-fade-in" data-scroll-animation>
            {/* Team Photo */}
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/start-your-journey.svg" 
                alt="AIWA Health Team" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                style={{ borderRadius: '4rem' }}
              />
              
              {/* Overlay Button - Positioned Lower */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <button className="bg-white/30 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-white/40 hover:border-white/50 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                  <span>Start Your Journey</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
