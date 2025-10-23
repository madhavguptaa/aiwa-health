import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Cancellation() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Cancellation Policy Content */}
      <section className="bg-gradient-to-br from-gray-50 to-red-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EA3F3F] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Cancellation & Refund Policy
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Updated on September 22nd, 2021
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            <div className="text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                Consultation Sessions
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Payments
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All applicable payments should be made prior to availing AIWA Health services.</li>
                <li>The user's session booking(s) will not be confirmed till the payment is received by AIWA Health.</li>
                <li>If you are accessing our services through a third-party or your organisation, beyond any sessions that might be offered to you as part of AIWA Health's association with your organisation, the user's session booking(s) will not be confirmed till the payment is received by AIWA Health.</li>
                <li>All purchases expire one year from the date of purchase.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Fee Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>For individual users, the fee per session is dependent on the selected psychological wellness expert.</li>
                <li>For users who are accessing sessions through their organisation, beyond their included sessions, the fee per session is dependent on the selected psychological wellness expert and specific arrangements with their organisation.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Cancellation, Reschedule and Refund
              </h2>
              <p>
                As an online psychological wellness platform, AIWA Health strives to provide the user with the best possible service in order to maximise user satisfaction. Keeping that in mind, AIWA Health's cancellation and refund policy ensures the highest possible flexibility for the user.
              </p>
              <p>The user has the flexibility to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reschedule the session</li>
                <li>Cancel the session</li>
                <li>Claim a refund on the cancelled session</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Session Reschedule
              </h3>
              <p>
                AIWA Health provides the user with the flexibility to reschedule their sessions to a later time. Any rescheduling request will be processed based on the time at which the user requests AIWA Health to reschedule with respect to the scheduled time of the session and is explained in the table below.
              </p>
              
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gradient-to-r from-[#EA3F3F] to-red-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Initiation of Session Reschedule</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Session Refund provided to the User</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700">At least 24 hours in advance of the scheduled session</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          ✓ Free Reschedule
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700">Within 24 hours of the scheduled session</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          ⚠ Needs to be booked as a new session
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Session Cancellation and Refund
              </h3>

              <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Cancellation By The User
              </h4>
              <p>
                The user can cancel the session and claim a refund in one of the two means offered:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Session Refund</li>
                <li>Cash Refund, in case the user has made a payment for the session</li>
              </ul>
              <p>
                The refund amount provided to the user will be based on when the cancellation was initiated and is explained in the table below.
              </p>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Initiation of Session Cancellation</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Session Refund provided to the User</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">At least 24 hours in advance of the scheduled session</td>
                      <td className="border border-gray-300 px-4 py-2">100% Session Refund or, if applicable, 100% Cash Refund</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Within 24 hours of the scheduled session</td>
                      <td className="border border-gray-300 px-4 py-2">No Session Refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For sessions cancelled at least 24 hours in advance, at the time of cancellation, the user has three options:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Book a new session at the time of the cancellation with the same expert;</li>
                <li>A session credit will be given to you on the AIWA Health account. This session credit will be valid for 1 year from the date of purchase.</li>
                <li>Take a refund back to the user's original method of payment, in cases where the user has made a payment for the session, by writing to info@aiwalife.in</li>
              </ol>

              <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Cancellation by AIWA Health Expert
              </h4>
              <p>
                If the session is cancelled by the AIWA Health expert, the user will receive a session credit in their AIWA Health account, regardless of the time at which the cancellation was done. This session credit can be used within the validity period to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>If your provider cancels your session within 30 days of your credit expiring, you get an additional 30 days from the date of cancellation to book your session beyond your credit expiry.</li>
                <li>Get a cash refund for this session credit within the validity period, if the user made a payment to book the session, by contacting info@aiwalife.in</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Session Delayed/Technical Issues
              </h3>
              <p>
                If, due to an unforeseeable reason from AIWA Health's end, a booked session is not completed in its entirety by the AIWA Health expert, the user may write to AIWA Health at info@aiwalife.in. Refunds will be handled on a case-to-case basis.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Session Packages
              </h2>
              <p>
                In cases where the user has booked a multi-session package available on our platform, refund can only be initiated on the entire package or the unutilised part of the entire package. In this case, the sessions that have already been completed will be charged at the price of the next highest package (if applicable) so that the user gets the lowest price per session possible.
              </p>
              <p>
                If there are upcoming session bookings from the package, the user cannot cancel and claim a refund on the package. The session bookings have to be completed or cancelled before a package cancellation can be initiated.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Fee Information
              </h2>
              <p>
                Users have the option to subscribe to different plans in order to unlock features. We offer subscriptions for the self-help plans (Plus plan) as well as for professional support over the plan (Pro plan). Together, they are referred to as our Premium plans.
              </p>
              <p>
                We may offer access to our Premium plans based on different billing cycles: monthly, quarterly, and annual. All payments for our Premium plans are managed entirely by Google Play Store or App Store, and the transaction takes place between Google Play/App Store and the user.
              </p>
              <p>
                All payments have to be made at the start of the billing cycle in order to unlock the premium plans. For the monthly plan, users will be charged every month. For the quarterly plan, users will be charged at the start of every quarter. For the annual plan, users will be charged once for the whole year.
              </p>
              <p>
                We may offer introductory discounts and free trials on our different plans from time-to-time. Introductory discounts are typically provided once for each plan type (for example, Monthly Plus plan). In case of introductory discounts, please note that the offer is applicable for the first billing cycle only; regular prices will be charged from the next billing cycle. Free trials are only offered once for each user. We do not offer free trials on the Pro subscription.
              </p>
              <p>
                The in-app subscription packages are automatically renewed unless cancelled by the user through Google Play Store (for our Android app) or through Apple Store (for our iOS app). The monthly plan will be renewed every month, the quarterly plan will be renewed every 3 months and the annual plan will be renewed every year.
              </p>
              <p>
                If users wish to cancel an app subscription, they can do so by opening the AIWA Health app, opening Settings, and clicking on Subscriptions. They will be able to view an option called 'Manage Subscriptions', which will lead them to Google Play Store or Apple AppStore, from where they can cancel any subscription that is currently active.
              </p>
              <p>
                Any refunds, if applicable, are processed by Google Play Store or Apple App Store at their discretion. The refund amount is decided by Google Play Store or Apple App Store in keeping with their respective policies and guidelines.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p>
                  Users who face difficulties with cancellation or have questions about refunds can write to us at <strong>info@aiwalife.in</strong>.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#EA3F3F] to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Need Help with Your Booking?
                  </h3>
                  <p className="mb-6 opacity-90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Our support team is here to help you with any questions about cancellations, rescheduling, or refunds.
                  </p>
                  <a 
                    href="mailto:info@aiwalife.in"
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
