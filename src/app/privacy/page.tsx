import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Privacy Policy Content */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EA3F3F] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              AIWA Health Privacy Policy
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Updated on July 25th, 2025
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            <div className="text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p>
                At AIWA Health, we are committed to respecting the privacy and confidentiality of the information that you entrust us with.
                This Privacy Policy outlines the policies and procedures regarding the collection, use, and disclosure of Personal Information from users.
              </p>

              <p>
                Please review this Privacy Policy carefully.
                To guarantee privacy, we maintain the client's anonymity and operate in accordance with strict confidentiality policies to ensure that all personal and health information received is securely stored and transmitted.
              </p>

              <p>
                If any of the terms of this Privacy Policy conflict with the applicable laws of your country, it is recommended that you refrain from using our website, mobile application(s), or related services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="w-8 h-8 bg-[#EA3F3F] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                Definitions
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  Company
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  "AIWA Health", "aiwahealth.com", "All India Welfare Association Health", "Company", "we", "our", "us", or similar terminology are all in reference to All India Welfare Association Health as the provider of services for the remainder of this document.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                User
              </h3>
              <p>
                "Client", "user", "you", "your" or similar terminology refer to you, as the user of the website, mobile application(s), and recipient of our services and resources.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Psychological Wellness Professional
              </h3>
              <p>
                "Psychological Wellness Practitioner", "Therapist", "Wellness Professional", "Wellness Advisor", or similar terminology refer to a qualified Psychological Wellness Practitioner authorized by AIWA Health to deliver services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Psychiatrist
              </h3>
              <p>
                "Psychiatrist", "doctor", or "clinical expert" refers to a doctor qualified in India specializing in psychiatry.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Nature of Services
              </h2>
              <p>
                AIWA Health is a psychological wellness platform that delivers emotional and mental wellness products and services to individuals and organizations.
                These include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Face-to-face consultations with authorized Psychological Wellness Professionals in India (individual or group)</li>
                <li>Online consultations with users based in India or abroad</li>
                <li>Periodic self-assessments and psychological tests</li>
                <li>Workshops and webinars conducted by trained Psychological Wellness Professionals</li>
                <li>Self-help tools, digital content, and programs through various channels including websites, mobile applications, and emails</li>
                <li>Secure in-app chat or encrypted message exchange with your Psychological Wellness Professional</li>
                <li>Participation in user communities, forums, feedback sessions, blogs, or surveys</li>
                <li>Consultations with Psychiatrists authorized by AIWA Health</li>
              </ul>
              <p>
                AIWA Health reserves the right to add, remove, or modify products and services from its offerings without prior notice.
                All such services are collectively referred to as the "Services".
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Consent
              </h2>
              <p>
                By using the Platform, providing your Personal Information, making payments, or accessing any feature or service, you consent to the collection, storage, processing, disclosure, and transfer of your Personal Information in accordance with this Privacy Policy and the applicable data privacy laws in India.
              </p>
              <p>
                If you are below 18 years of age, your parent/guardian provides informed consent for you to receive services and for AIWA Health to collect, process, and store your information.
              </p>
              <p>
                You acknowledge that you provide your Personal Information voluntarily — either directly to AIWA Health or via a third party (e.g., your employer or wellness partner).
                You may withdraw your consent at any time by writing to info@aiwalife.in.
              </p>
              <p>
                However, withdrawal of consent or failure to provide required information may result in restrictions on your ability to use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Personal Information
              </h2>
              <p>
                To deliver our services, we collect certain information — either directly from you, through your organization, or via third-party systems — including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, phone number, emergency contact, gender, email, and occupation</li>
                <li>Location, age, and health-related data relevant to your consultation</li>
                <li>Information shared during assessments, feedback, or communication with professionals</li>
                <li>Appointment records, payment information, and activity data on the Platform</li>
              </ul>
              <p>
                We use this Personal Information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify and contact you</li>
                <li>Schedule, remind, and manage appointments</li>
                <li>Provide therapy, follow-ups, and consultations</li>
                <li>Improve service quality and communication</li>
                <li>Conduct statistical and anonymized research</li>
                <li>Detect and prevent fraud or misuse</li>
                <li>Comply with legal requirements</li>
              </ul>
              <p>
                Our therapists, psychiatrists, and digital systems may use this data to assess your needs and offer appropriate support. Minimal information is shared with third-party tools when necessary for service delivery.
              </p>
              <p>
                If you no longer wish to receive communications from us, you may contact info@aiwalife.in.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Updating Personal Information
              </h2>
              <p>
                If your Personal Information changes, or you wish to correct, update, or delete your data, you may contact info@aiwalife.in.
                We will take reasonable steps to update records promptly, subject to legal and professional retention requirements.
              </p>
              <p>
                Certain information — such as assessment responses or therapy notes — cannot be modified once submitted.
                Some data must be retained (e.g., payment records, feedback, or session logs) for compliance and record-keeping purposes, as per Indian law and professional standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Cookies
              </h2>
              <p>
                AIWA Health uses cookies to enhance user experience. Cookies help us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Save login preferences</li>
                <li>Enable certain features</li>
                <li>Analyze usage patterns and traffic</li>
              </ul>
              <p>
                You may disable cookies via your browser settings, but this may impact functionality.
                By using the Platform, you consent to our use of cookies and any third-party services integrated with it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Log Data
              </h2>
              <p>
                When you visit or use our Platform, our servers automatically collect Log Data, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, device name, browser type, and operating system</li>
                <li>Access times, session duration, and pages visited</li>
                <li>Crash reports or performance analytics</li>
              </ul>
              <p>
                We use this data to improve user experience, diagnose issues, and analyze trends.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Confidentiality and Informed Consent
              </h2>
              <p>
                AIWA Health maintains strict confidentiality for all user information and therapy sessions.
                Our Wellness Professionals and Psychiatrists follow professional and ethical standards to ensure privacy.
              </p>
              <p>
                However, confidentiality may be breached only if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>There is a risk of harm to yourself or others</li>
                <li>Disclosure of criminal activity, abuse, or violence is required by law</li>
                <li>Information must be shared to ensure safety or comply with a court order</li>
              </ul>
              <p>
                AIWA Health and its professionals may share necessary information with supervisors, relevant authorities, or emergency contacts, as required.
                For couples or family therapy, some details may be shared with partners or family members to ensure ethical treatment and safety.
              </p>
              <p>
                Except for the above cases, no personal information is disclosed without explicit consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Third-Party Disclosure
              </h2>
              <p>
                AIWA Health does not sell or rent your personal information.
                We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hosting and IT service providers assisting in operations</li>
                <li>Legal or regulatory authorities when required by law</li>
                <li>Analytical or research partners (only anonymized data)</li>
              </ul>
              <p>
                We are not responsible for third-party privacy practices.
                If you access our services via a third-party platform or employer, please review their policies as well.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Security
              </h2>
              <p>
                We use administrative, physical, and technical safeguards to protect your data from unauthorized access, alteration, or loss.
                No video or voice sessions are recorded.
              </p>
              <p>
                Despite our best efforts, no system is completely secure.
                You are responsible for securing your own communication channels (e.g., email, messages).
                AIWA Health will not be liable for unauthorized access resulting from user negligence.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Links to Other Websites
              </h2>
              <p>
                Our Platform may contain links to third-party websites.
                AIWA Health is not responsible for the content, privacy, or security practices of such sites.
                You access them at your own risk and are encouraged to review their privacy policies before use.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Changes to This Policy
              </h2>
              <p>
                AIWA Health reserves the right to modify or update this Privacy Policy at any time without prior notice.
                If significant changes are made, we may display a notice on the website or notify you by email.
              </p>
              <p>
                Continued use of the Platform after such updates constitutes acceptance of the revised policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                International Data Transfers
              </h2>
              <p>
                By using AIWA Health, you consent to your information being stored and processed in India, and possibly in other countries that may not offer equivalent data protection standards.
                Regardless, AIWA Health will always handle your data in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Grievance Redressal
              </h2>
              <p>
                AIWA Health has established a grievance redressal mechanism to address user concerns related to data privacy or service quality.
              </p>
              <p>
                Grievance Officer: [To be appointed]
              </p>
              <p>
                📩 Email: info@aiwalife.in
              </p>
              <p>
                We will respond to all grievances within one month of receipt.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Jurisdiction
              </h2>
              <p>
                This Privacy Policy is governed by the laws of India.
                Any disputes shall be subject to the exclusive jurisdiction of the courts in [City to be added – e.g., Delhi or Mumbai].
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="mb-2">
                  <strong>Registered Address:</strong> 55 Panchsheel, Gali No 9, Garh Road, Meerut City, Meerut, Meerut, Uttar Pradesh
                </p>
                <p>
                  <strong>Email:</strong> info@aiwalife.in
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#EA3F3F] to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Questions About Our Privacy Policy?
                  </h3>
                  <p className="mb-6 opacity-90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We're here to help clarify any questions you may have about how we protect your privacy and handle your personal information.
                  </p>
                  <a 
                    href="mailto:info@aiwalife.in"
                    className="inline-flex items-center px-6 py-3 bg-white text-[#EA3F3F] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
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