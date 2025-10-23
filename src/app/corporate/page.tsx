import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Corporate() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Coming Soon Section */}
      <section className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Corporate Inquiries
          </h1>
          <p className="text-2xl text-gray-600 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Coming Soon
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We're working on something special for corporate partnerships and inquiries. 
            Stay tuned for updates on how we can help your organization with mental health and wellness solutions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

