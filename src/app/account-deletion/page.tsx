import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Account Deletion Content */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EA3F3F] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Account Deletion Policy
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Updated on July 25th, 2025
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            <div className="text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Important:</strong> Account deletion is permanent and irreversible. Please read this policy carefully before proceeding with account deletion.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                At AIWA Health, we understand that you may need to delete your account for various reasons. This policy outlines the process, implications, and your rights regarding account deletion.
              </p>

              <p>
                We are committed to protecting your privacy and ensuring that your personal information is handled appropriately when you choose to delete your account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                How to Delete Your Account
              </h2>

              <p>
                You can request account deletion through the following methods:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email Request:</strong> Send an email to info@aiwalife.in with the subject "Account Deletion Request"</li>
                <li><strong>In-App Request:</strong> Use the account deletion option in your AIWA Health app settings</li>
                <li><strong>Customer Support:</strong> Contact our support team through the app or website</li>
              </ul>

              <p>
                When requesting account deletion, please provide:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your registered email address</li>
                <li>Your full name as registered</li>
                <li>Reason for account deletion (optional but helpful for our service improvement)</li>
                <li>Confirmation that you understand the implications of account deletion</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                What Happens When You Delete Your Account
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Immediate Effects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your account will be deactivated immediately upon confirmation</li>
                <li>You will no longer be able to log in to your account</li>
                <li>All active sessions will be terminated</li>
                <li>You will stop receiving notifications and communications from AIWA Health</li>
                <li>Access to all AIWA Health services will be revoked</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Data Deletion Timeline
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Personal Information:</strong> Deleted within 30 days of account deletion request
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Session Records:</strong> Deleted within 90 days (required for professional record-keeping)
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Payment Records:</strong> Retained for 7 years as required by Indian law
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Anonymized Data:</strong> May be retained for research and service improvement purposes
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                Information That Cannot Be Deleted
              </h2>

              <p>
                Due to legal, regulatory, and professional requirements, certain information must be retained even after account deletion:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Financial Records:</strong> Payment history, invoices, and transaction records (retained for 7 years as per Indian law)</li>
                <li><strong>Professional Records:</strong> Therapy notes and session summaries (retained for professional compliance)</li>
                <li><strong>Legal Compliance:</strong> Information required for legal proceedings or regulatory compliance</li>
                <li><strong>Anonymized Data:</strong> De-identified information used for research and service improvement</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                Impact on Active Services
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Ongoing Sessions
              </h3>
              <p>
                If you have scheduled sessions or ongoing therapy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All future sessions will be cancelled</li>
                <li>You may be eligible for refunds based on our Cancellation & Refund Policy</li>
                <li>Your therapist will be notified of the account deletion</li>
                <li>Session credits will be forfeited unless refunded according to our policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Subscriptions
              </h3>
              <p>
                For active subscriptions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All subscriptions will be cancelled immediately</li>
                <li>Refunds will be processed according to our Cancellation & Refund Policy</li>
                <li>Access to premium features will be revoked</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                Recovery and Reactivation
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important:</strong> Account deletion is permanent and cannot be reversed. Once your account is deleted, you cannot recover your data or reactivate your account.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                If you wish to use AIWA Health services again after account deletion, you will need to create a new account and start fresh.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                Data Export Before Deletion
              </h2>

              <p>
                Before deleting your account, you may request a copy of your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send an email to info@aiwalife.in with the subject "Data Export Request"</li>
                <li>We will provide your data in a readable format within 30 days</li>
                <li>This includes your profile information, session history, and assessment results</li>
                <li>Data export is free of charge</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">7</span>
                </div>
                Contact Information
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="mb-2">
                  <strong>For Account Deletion Requests:</strong> info@aiwalife.in
                </p>
                <p className="mb-2">
                  <strong>For Data Export Requests:</strong> info@aiwalife.in
                </p>
                <p className="mb-2">
                  <strong>Registered Address:</strong> 55 Panchsheel, Gali No 9, Garh Road, Meerut City, Meerut, Meerut, Uttar Pradesh
                </p>
                <p>
                  <strong>Response Time:</strong> We will respond to all requests within 48 hours
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#EA3F3F] to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Need Help with Account Deletion?
                  </h3>
                  <p className="mb-6 opacity-90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Our support team is here to help you understand the account deletion process and answer any questions you may have.
                  </p>
                  <a 
                    href="mailto:info@aiwalife.in?subject=Contact from AIWA Health Website - Account Deletion Support"
                    className="inline-flex items-center px-6 py-3 bg-white text-[#EA3F3F] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                  </a>
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
