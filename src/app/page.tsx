'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Heart, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isHeartFilled, setIsHeartFilled] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)
  const [typedText, setTypedText] = useState('')
  
  const fullText = 'Today, Tomorrow, And Always'

  const handleHeartClick = () => {
    setIsHeartFilled(prev => !prev)
  }

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : 4)) // 5 blog posts total
  }

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev < 4 ? prev + 1 : 0)) // 5 blog posts total
  }

  const handlePrevTestimonial = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + 3) % 3) // 3 testimonials total
  }

  const handleNextTestimonial = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % 3) // 3 testimonials total
  }

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          // Wait before starting to delete
          setTimeout(() => {
            isDeleting = true
          }, 3000)
        }
      } else {
        if (currentIndex > 0) {
          setTypedText(fullText.substring(0, currentIndex - 1))
          currentIndex--
        } else {
          isDeleting = false
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/home-hero.svg" 
                  alt="Mental Health Support" 
                  className="w-4/5 h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ borderRadius: '3rem' }}
                />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="text-left lg:-ml-16">
              <h1 className="font-bold text-gray-600 mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Prioritizing Your Mental Well-being Every Day.
          </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Discover personalized support, expert guidance, and resources designed to help you feel your best—mentally, emotionally, and physically.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="bg-[#EA3F3F] text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-medium hover:bg-[#D63636] transition-colors">
                  Book Appointment
                </button>
                <button className="text-[#EA3F3F] px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:text-[#D63636] transition-colors">
                  Join Live Session...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 leading-relaxed px-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <strong>Because</strong> Your <em>Mental Health Deserves</em><br />
              <em>Attention—</em><strong>{typedText}</strong><span className="animate-pulse">|</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Content */}
            <div className="bg-gray-100 p-6 md:p-8 shadow-sm h-full flex flex-col justify-center" style={{ borderRadius: '2rem' }}>
              <h2 className="font-bold text-gray-600 mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                AIWA Health (All India Wellness Association) is a dedicated <em>mental health and wellness platform connecting individuals</em> with certified therapists.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We make therapy accessible, confidential, and affordable — empowering people to care for their mental and emotional well-being from anywhere.
              </p>
              <button className="bg-gray-900 text-white w-10 h-10 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center">
                <ArrowRight size={16} />
              </button>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-lg" style={{ borderRadius: '2rem' }}>
                <img 
                  src="/who-we-are.svg" 
                  alt="Who We Are" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ borderRadius: '2rem' }}
                />
                
              </div>
              
              {/* Testimonial Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs border border-white/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src="/doctor-photo.svg" 
                      alt="Dr. Shreya Gupta" 
                      className="w-10 h-10 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Shreya Gupta</h4>
                  </div>
                </div>
                <p className="text-sm text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  "AIWA helps me reach people who might not seek therapy, making mental wellness accessible and effective."
                </p>
              </div>
              
              {/* Heart Button with Enhanced Glass Effect */}
              <div className="absolute top-4 right-4">
                <button 
                  onClick={handleHeartClick}
                  className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-200 hover:scale-110 border border-white/30"
                >
                  <Heart 
                    size={20} 
                    className={isHeartFilled ? "text-red-500 fill-red-500" : "text-red-500"} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AIWA Health Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-semibold mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Raleway, sans-serif', color: '#616161' }}>
              Why Choose AIWA Health?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Left Column - Affordable Sessions (Large) */}
            <div className="lg:col-span-2">
              {/* Affordable Sessions */}
              <div className="pt-6 px-8 pb-0 shadow-sm hover:shadow-md transition-shadow h-full overflow-hidden" style={{ backgroundColor: '#FFF3F3', borderRadius: '40px' }}>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif', color: '#616161' }}>
                    Affordable Sessions –
                  </h3>
                  <p className="mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#616161' }}>
                    Quality therapy that fits your budget
                  </p>
                  <div className="flex justify-center relative">
                    <img 
                      src="/affordable-sessions.svg" 
                      alt="Affordable Sessions" 
                      className="w-80 h-105 object-contain hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 -left-1 sm:-left-2 flex" style={{ gap: '-10px' }}>
                      <img src="/affordable-sessions-1.svg" alt="Profile 1" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
                      <img src="/affordable-sessions-2.svg" alt="Profile 2" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
                      <img src="/affordable-sessions-3.svg" alt="Profile 3" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
                      <img src="/affordable-sessions-4.svg" alt="Profile 4" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
                      <img src="/affordable-sessions-5.svg" alt="Profile 5" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Two large cards on top, two small cards below */}
            <div className="lg:col-span-2 space-y-8">
              {/* Top Row - Two Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Qualified Experts */}
                <div className="pt-6 px-6 pb-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[280px]" style={{ backgroundColor: '#E8F5F3', borderRadius: '40px' }}>
                  <div className="text-left relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif', color: '#616161' }}>
                      Qualified Experts –
                    </h3>
                    <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif', color: '#616161' }}>
                      Verified, licensed therapists for every need.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-36">
                    <img 
                      src="/qualified-experts.svg" 
                      alt="Qualified Experts" 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Flexible Access */}
                <div className="bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col min-h-[280px] sm:min-h-[320px] md:min-h-[280px]" style={{ borderRadius: '40px' }}>
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <img 
                      src="/flexible-access.svg" 
                      alt="Flexible Access" 
                      className="w-40 h-40 sm:w-48 sm:h-48 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left flex-grow flex flex-col justify-end">
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif', color: '#616161' }}>
                      Flexible Access –
                    </h3>
                    <p className="mb-0 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif', color: '#616161' }}>
                      Talk through chat, call, or video anytime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Two Small Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 100% Confidential */}
                <div className="bg-blue-25 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" style={{ backgroundColor: '#f0f8ff', borderRadius: '40px' }}>
                  <div className="text-left relative z-10">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif', color: '#616161' }}>
                      100% Confidential –
                    </h3>
                    <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#616161' }}>
                      Private, encrypted online sessions.
                    </p>
                  </div>
                  <div className="absolute top-0 -right-4 w-32 h-32 opacity-60">
                    <img 
                      src="/confidential-bg.svg" 
                      alt="Confidential Background" 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="bg-blue-25 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" style={{ backgroundColor: '#fffff0', borderRadius: '40px' }}>
                  <div className="text-left relative z-10">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif', color: '#616161' }}>
                      24/7 Support –
                    </h3>
                    <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#616161' }}>
                      We're here when you need us most.
                    </p>
                  </div>
                  <div className="absolute top-0 -right-4 w-32 h-32 opacity-60">
                    <img 
                      src="/247-support.svg" 
                      alt="24/7 Support Background" 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Latest Blog Posts
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Explore mental health insights, wellness tips, and coping strategies from AIWA experts.
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevSlide}
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button 
                onClick={handleNextSlide}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Blog Posts Carousel */}
          <div className="relative overflow-hidden pb-16">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.333)}%)` }}
            >
              {/* Blog Post 1 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <a href="/blog/1" className="block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                    <div className="relative">
                      <img 
                        src="/blog-post-1.png" 
                        alt="Blog Post 1" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Psychiatrist
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Mind Matters: Prioritize Your Mental Health
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Mental health is the cornerstone of overall well-being, yet it is often overlooked. It affects how we think, feel, and act in daily life...
                      </p>
                      <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Blog Post 2 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <a href="/blog/2" className="block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                    <div className="relative">
                      <img 
                        src="/blog-post-2.png" 
                        alt="Blog Post 2" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Sleep Specialist & Psychotherapist
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Building Resilience in Challenging Times
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Life's challenges can feel overwhelming, but building resilience helps us bounce back stronger. Learn practical strategies to develop mental toughness...
                      </p>
                      <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Blog Post 3 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <a href="/blog/3" className="block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                    <div className="relative">
                      <img 
                        src="/blog-post-3.png" 
                        alt="Blog Post 3" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Counseling Psychologist
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        The Power of Mindfulness in Daily Life
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Mindfulness isn't just meditation—it's a way of living that can transform your mental health. Discover simple techniques to stay present...
                      </p>
                      <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Blog Post 4 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <a href="/blog/4" className="block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                    <div className="relative">
                      <img 
                        src="/blog-post-4.png" 
                        alt="Blog Post 4" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Mindfulness Coach
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Understanding and Managing Stress
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Stress is a natural response, but chronic stress can harm your mental health. Learn to recognize stress signals and develop healthy coping mechanisms...
                      </p>
                      <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Blog Post 5 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <a href="/blog/5" className="block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                    <div className="relative">
                      <img 
                        src="/blog-post-5.png" 
                        alt="Blog Post 5" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Clinical Psychologist
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Creating Healthy Relationships
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Healthy relationships are fundamental to mental well-being. Explore how to build meaningful connections and maintain emotional boundaries...
                      </p>
                      <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Your Journey to Wellness Starts Here
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Discover how others found peace and confidence through <em>AIWA Health</em>.
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevTestimonial}
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden pb-16">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialSlide * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.333)}%)` }}
            >
              {/* Testimonial 1 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src="/testimonial-1.svg" 
                      alt="Riya S." 
                      className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-4xl text-gray-300 font-serif">"</div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    AIWA Health made it easy for me to seek therapy without judgment. My therapist truly listened and helped me manage my anxiety in practical ways. I feel stronger every day.
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Riya S.</h4>
                    <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Marketing Professional</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>New Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src="/testimonials-2.svg" 
                      alt="Aakrati Choudhary" 
                      className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-4xl text-gray-300 font-serif">"</div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    I used to believe therapy wasn't for me. But one session changed everything. The convenience and professionalism at AIWA Health made the process smooth and meaningful.
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Aakrati Choudhary</h4>
                    <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Entrepreneur</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ludhiana, India</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src="/testimonials-3.svg" 
                      alt="Aman Sharma" 
                      className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-4xl text-gray-300 font-serif">"</div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Dealing with academic pressure felt impossible until I found a therapist through AIWA. She guided me with patience and helped me find focus again. I'm so grateful.
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Aman Sharma</h4>
                    <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Marketing Professional</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>Noida, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}