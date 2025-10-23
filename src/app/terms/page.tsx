import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Terms and Conditions Content */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EA3F3F] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Terms & Conditions
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Effective from July 25th, 2025
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Please read these Terms and Conditions carefully before using our services. By accessing or using AIWA Health, you agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using AIWA Health services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                Use License
              </h2>
              <p>
                Permission is granted to temporarily access AIWA Health for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                Service Description
              </h2>
              <p>
                AIWA Health provides mental health and wellness services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Online therapy sessions with licensed professionals</li>
                <li>Mental health assessments and screenings</li>
                <li>Educational resources and self-help tools</li>
                <li>Community support and peer connections</li>
                <li>Wellness workshops and programs</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                User Responsibilities
              </h2>
              <p>
                As a user of AIWA Health services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Respect the privacy and rights of other users</li>
                <li>Not misuse the platform for illegal or harmful purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                Payment Terms
              </h2>
              <p>
                All fees for services are due in advance. Payment must be made through our secure payment system. Refunds are subject to our Cancellation & Refund Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                Limitation of Liability
              </h2>
              <p>
                AIWA Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">7</span>
                </div>
                Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">8</span>
                </div>
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-2">
                  <strong>Registered Address:</strong> 55 Panchsheel, Gali No 9, Garh Road, Meerut City, Meerut, Meerut, Uttar Pradesh
                </p>
                <p>
                  <strong>Email:</strong> info@aiwalife.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
