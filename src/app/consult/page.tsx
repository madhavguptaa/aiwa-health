'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Shield, Users, Zap, CheckCircle, Heart, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Consult() {
  const [likedDoctors, setLikedDoctors] = useState<Set<number>>(new Set())
  const [currentTherapistSlide, setCurrentTherapistSlide] = useState(0)
  
  useScrollAnimation()

  const handleLikeClick = (doctorId: number) => {
    setLikedDoctors(prev => {
      const newSet = new Set(prev)
      if (newSet.has(doctorId)) {
        newSet.delete(doctorId)
      } else {
        newSet.add(doctorId)
      }
      return newSet
    })
  }

  const handlePrevTherapist = () => {
    setCurrentTherapistSlide((prev) => (prev - 1 + 4) % 4) // 4 therapists total
  }

  const handleNextTherapist = () => {
    setCurrentTherapistSlide((prev) => (prev + 1) % 4) // 4 therapists total
  }
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white pt-48 pb-12 md:pt-52 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left scroll-fade-in-left" data-scroll-animation>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 md:mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Find the Right Therapist for You
              </h1>
              <p className="text-lg md:text-xl text-[#616161] mb-4 md:mb-6 italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Because your mental well-being deserves care that fits you.
              </p>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                At AIWA Health, we connect you with verified mental health professionals who understand your needs. Whether you're facing anxiety, burnout, relationship issues, or just need someone to talk to — your healing starts here.
              </p>
            </div>
            
            {/* Right Visual */}
            <div className="relative scroll-fade-in-right" data-scroll-animation>
              <div className="relative z-10">
                <img 
                  src="/consult-hero.svg" 
                  alt="Therapy Session" 
                  className="w-3/4 h-auto rounded-[2rem] shadow-lg ml-8 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose a Therapist Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-semibold text-gray-600 mb-4 leading-tight text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Choose a Therapist Who<br />
              Understands You
            </h2>
          </div>

          {/* Filter Section */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <div className="relative">
                <select className="bg-gray-100 rounded-full pl-6 pr-8 py-3 text-gray-700 focus:outline-none appearance-none">
                  <option>Specialization</option>
                  <option>Anxiety</option>
                  <option>Depression</option>
                  <option>Trauma</option>
                  <option>Relationships</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 fill-current pointer-events-none" />
              </div>
              
              <div className="relative">
                <select className="bg-gray-100 rounded-full pl-6 pr-8 py-3 text-gray-700 focus:outline-none appearance-none">
                  <option>Availability</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Weekend</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 fill-current pointer-events-none" />
              </div>
              
              <div className="relative">
                <select className="bg-gray-100 rounded-full pl-6 pr-8 py-3 text-gray-700 focus:outline-none appearance-none">
                  <option>Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                  <option>Tamil</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 fill-current pointer-events-none" />
              </div>
              
              <div className="relative">
                <select className="bg-gray-100 rounded-full pl-6 pr-8 py-3 text-gray-700 focus:outline-none appearance-none">
                  <option>Therapy Type</option>
                  <option>Individual</option>
                  <option>Couples</option>
                  <option>Group</option>
                  <option>Family</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 fill-current pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Therapist Cards */}
          <div className="bg-gray-50 rounded-3xl p-8">
            {/* Navigation Arrows - Mobile Only */}
            <div className="flex justify-center mb-6 md:hidden">
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrevTherapist}
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <button 
                  onClick={handleNextTherapist}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Therapist 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => handleLikeClick(1)}
                  className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                    likedDoctors.has(1) 
                      ? 'text-red-500' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={20} className={`${likedDoctors.has(1) ? 'fill-current' : ''} transition-all duration-200`} />
                </button>
              </div>
              <div className="text-center mb-8 -mt-2">
                <img 
                  src="/doctor1.svg" 
                  alt="Dr. Shreyansh" 
                  className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Shreyansh</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Specializes in Anxiety, Depression, and Lifestyle Balance
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                </div>
                <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Therapist 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => handleLikeClick(2)}
                  className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                    likedDoctors.has(2) 
                      ? 'text-red-500' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={20} className={`${likedDoctors.has(2) ? 'fill-current' : ''} transition-all duration-200`} />
                </button>
              </div>
              <div className="text-center mb-4 -mt-2">
                <img 
                  src="/doctor2.svg" 
                  alt="Dr. Riyansh Gupta" 
                  className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Riyansh Gupta</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Specializes in Anxiety, Depression, and Lifestyle Balance
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                </div>
                <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Therapist 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => handleLikeClick(3)}
                  className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                    likedDoctors.has(3) 
                      ? 'text-red-500' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={20} className={`${likedDoctors.has(3) ? 'fill-current' : ''} transition-all duration-200`} />
                </button>
              </div>
              <div className="text-center mb-4 -mt-2">
                <img 
                  src="/doctor3.svg" 
                  alt="Dr. Avi Sharma" 
                  className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Avi Sharma</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Specializes in Anxiety, Depression, and Lifestyle Balance
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                </div>
                <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Therapist 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => handleLikeClick(4)}
                  className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                    likedDoctors.has(4) 
                      ? 'text-red-500' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={20} className={`${likedDoctors.has(4) ? 'fill-current' : ''} transition-all duration-200`} />
                </button>
              </div>
              <div className="text-center mb-4 -mt-2">
                <img 
                  src="/doctor4.svg" 
                  alt="Dr. Ayan" 
                  className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Ayan</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Specializes in Anxiety, Depression, and Lifestyle Balance
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                </div>
                <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden relative overflow-hidden mb-6">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentTherapistSlide * 100}%)` }}
              >
                {/* Therapist 1 - Mobile */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-end mb-4">
                      <button 
                        onClick={() => handleLikeClick(1)}
                        className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                          likedDoctors.has(1) 
                            ? 'text-red-500' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={20} className={`${likedDoctors.has(1) ? 'fill-current' : ''} transition-all duration-200`} />
                      </button>
                    </div>
                    <div className="text-center mb-8 -mt-2">
                      <img 
                        src="/doctor1.svg" 
                        alt="Dr. Shreyansh" 
                        className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Shreyansh</h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Specializes in Anxiety, Depression, and Lifestyle Balance
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                      </div>
                      <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Therapist 2 - Mobile */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-end mb-4">
                      <button 
                        onClick={() => handleLikeClick(2)}
                        className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                          likedDoctors.has(2) 
                            ? 'text-red-500' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={20} className={`${likedDoctors.has(2) ? 'fill-current' : ''} transition-all duration-200`} />
                      </button>
                    </div>
                    <div className="text-center mb-4 -mt-2">
                      <img 
                        src="/doctor2.svg" 
                        alt="Dr. Riyansh Gupta" 
                        className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Riyansh Gupta</h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Specializes in Anxiety, Depression, and Lifestyle Balance
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                      </div>
                      <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Therapist 3 - Mobile */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-end mb-4">
                      <button 
                        onClick={() => handleLikeClick(3)}
                        className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                          likedDoctors.has(3) 
                            ? 'text-red-500' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={20} className={`${likedDoctors.has(3) ? 'fill-current' : ''} transition-all duration-200`} />
                      </button>
                    </div>
                    <div className="text-center mb-4 -mt-2">
                      <img 
                        src="/doctor3.svg" 
                        alt="Dr. Avi Sharma" 
                        className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Avi Sharma</h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Specializes in Anxiety, Depression, and Lifestyle Balance
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                      </div>
                      <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Therapist 4 - Mobile */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-end mb-4">
                      <button 
                        onClick={() => handleLikeClick(4)}
                        className={`transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                          likedDoctors.has(4) 
                            ? 'text-red-500' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={20} className={`${likedDoctors.has(4) ? 'fill-current' : ''} transition-all duration-200`} />
                      </button>
                    </div>
                    <div className="text-center mb-4 -mt-2">
                      <img 
                        src="/doctor4.svg" 
                        alt="Dr. Ayan" 
                        className="w-50 h-40 rounded-full mx-auto mb-1 object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>Dr. Ayan</h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>- Clinical Psychologist</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Specializes in Anxiety, Depression, and Lifestyle Balance
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ years</span>
                      </div>
                      <button className="bg-[#EA3F3F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D63636] transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show More Link */}
            <div className="text-right">
              <a href="#" className="inline-flex items-center text-gray-600 hover:text-[#EA3F3F] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Show more
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Wellness Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Let's make <em>mental wellness</em><br />
            <strong>accessible</strong> — <em>together.</em>
          </h2>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/why-us-video.svg" 
                alt="Video Content Background" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Overlay - Responsive positioning */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-10 max-w-4xl">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-white/30">
                <h3 className="font-bold text-white mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Watch. Learn. Take Care of Your Mind.
                </h3>
                <p className="text-white mb-4 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Short, insightful videos from AIWA's certified therapists on topics like
                  <span className="hidden sm:inline"><br /></span>
                  <span className="sm:hidden"> </span>
                  coping strategies, emotional balance, and mental wellness.
                </p>
                <button className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Explore Videos →
                </button>
              </div>
            </div>

            {/* External Link Button - Responsive sizing */}
            <button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
              <ArrowRight size={16} className="sm:w-5 sm:h-5 text-white -rotate-45" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
