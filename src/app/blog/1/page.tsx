import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPost1() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Blog Post Content */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          {/* Blog Post Header */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Clinical Psychologist
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Mind Matters: Prioritize Your Mental Health
            </h1>
            <div className="flex items-center text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span>Published on January 15, 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/blog-post-1.png" 
              alt="Mind Matters: Prioritize Your Mental Health" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Intro: Why Mental Health is More Important Than Ever
              </h2>
              
              <p>
                Mental health is the foundation of overall well-being, yet it is often overlooked. According to the World Health Organization (WHO), 1 in 4 people worldwide will be affected by mental or neurological disorders at some point in their lives. Despite this staggering statistic, mental health continues to be stigmatized in many cultures.
              </p>

              <p>
                Good mental health is more than just the absence of mental illness; it is a state of emotional, psychological, and social well-being that influences how we think, feel, and act. It determines how we cope with stress, relate to others, and make decisions. Without attention to mental health, life can feel overwhelming, and even simple challenges can seem insurmountable.
              </p>

              <p>
                In modern life, with increasing pressures from work, social media, relationships, and global uncertainty, taking care of your mental health is more crucial than ever. Yet, many people wait until they face a crisis before seeking help. This post will explore what mental health truly is, common challenges, and practical ways to nurture it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                What is Mental Health?
              </h2>

              <p>
                Mental health encompasses our emotional, psychological, and social well-being. It affects:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>How we think</strong> – our beliefs, self-perception, and outlook on life</li>
                <li><strong>How we feel</strong> – emotions, mood regulation, stress response</li>
                <li><strong>How we act</strong> – behavior, decision-making, and interactions with others</li>
              </ul>

              <p>
                Mental health is dynamic, not static. Everyone experiences ups and downs, but maintaining balance and resilience is key. Poor mental health can manifest as constant anxiety, sadness, irritability, or difficulty functioning in daily life.
              </p>

              <p><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Feeling overwhelmed at work or school despite normally managing tasks well</li>
                <li>Persistent sadness or loss of interest in hobbies</li>
                <li>Difficulty concentrating or making decisions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Common Mental Health Issues
              </h2>

              <p>Some of the most prevalent mental health challenges include:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Depression:</strong> Persistent feelings of sadness, hopelessness, and loss of interest in activities. May include fatigue, sleep disturbances, and difficulty concentrating.</li>
                <li><strong>Anxiety Disorders:</strong> Excessive worry, panic attacks, and physical symptoms like heart palpitations or sweating.</li>
                <li><strong>Bipolar Disorder:</strong> Alternating periods of extreme highs (mania) and lows (depression).</li>
                <li><strong>Post-Traumatic Stress Disorder (PTSD):</strong> Emotional distress following a traumatic event, with flashbacks, nightmares, or hypervigilance.</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <p><strong>Case Example:</strong></p>
                <p>Imagine Priya, a 28-year-old professional, who began feeling constantly anxious and unable to sleep due to work pressures. Initially, she dismissed it as stress, but over time, it impacted her relationships, productivity, and health. Seeking therapy and practicing mindfulness helped her regain balance.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                The Impact of Neglecting Mental Health
              </h2>

              <p>Neglecting mental health can affect:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Relationships:</strong> Mood swings, withdrawal, or irritability can strain connections with family and friends.</li>
                <li><strong>Work and Productivity:</strong> Poor concentration, absenteeism, or burnout.</li>
                <li><strong>Physical Health:</strong> Increased risk of heart disease, weakened immunity, obesity, and chronic illnesses.</li>
              </ul>

              <p>
                Mental health challenges often feed on themselves: stress worsens anxiety, poor sleep aggravates depression, and lack of support increases isolation. Addressing mental health proactively can prevent these spirals.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Practical Ways to Improve Mental Health
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Therapy and Counseling:
              </h3>
              <p>Professional guidance helps identify triggers, develop coping strategies, and provide emotional support. Options include cognitive-behavioral therapy (CBT), talk therapy, and group counseling.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Mindfulness and Meditation:
              </h3>
              <p>Regular meditation or mindfulness exercises can reduce stress, improve focus, and increase emotional resilience. Techniques like deep breathing, body scans, and guided meditation can be incorporated into daily routines.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Physical Exercise:
              </h3>
              <p>Exercise releases endorphins—natural mood enhancers. Activities like running, yoga, swimming, or even walking can improve mental clarity and reduce symptoms of anxiety and depression.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Healthy Diet and Sleep:
              </h3>
              <p>A balanced diet and proper sleep schedule support brain function. Nutrient-rich foods, hydration, and avoiding excessive caffeine or alcohol can positively influence mood.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Social Connection:
              </h3>
              <p>Strong relationships provide support, validation, and a sense of belonging. Talking openly with friends, family, or support groups reduces isolation.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Journaling and Self-Reflection:
              </h3>
              <p>Writing down thoughts and feelings helps process emotions, identify patterns, and release pent-up stress.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Limiting Negative Influences:
              </h3>
              <p>Reducing social media exposure, toxic relationships, or high-pressure environments can protect mental well-being.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Reducing Stigma and Encouraging Open Conversations
              </h2>

              <p>
                Mental health stigma prevents many from seeking help. By educating ourselves, sharing experiences, and normalizing mental health discussions, we create safer spaces for healing. Schools, workplaces, and communities can promote awareness through workshops, campaigns, and policies supporting mental wellness.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-6">
                <p><strong>Tip:</strong> Sharing your mental health journey—even small struggles—can inspire others to seek help.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                When to Seek Professional Help
              </h2>

              <p>Seek help if:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Symptoms persist for more than two weeks</li>
                <li>Daily functioning is impaired</li>
                <li>Suicidal thoughts or self-harm arise</li>
                <li>Anxiety or depression feels unmanageable</li>
              </ul>

              <p>
                Therapists, counselors, and psychiatrists can provide tailored support, medication if necessary, and coping strategies to regain balance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Conclusion: Taking Action Today
              </h2>

              <p>
                Mental health is an essential part of life that cannot be ignored. From self-care practices to professional guidance, there are multiple ways to nurture the mind. Start small: a few minutes of meditation, a healthy meal, a walk, or talking to a friend. Consistency is key.
              </p>

              <p>
                <strong>Remember:</strong> prioritizing mental health is not a luxury—it is survival, growth, and the foundation for a fulfilling life.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Need Professional Support?
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              If you're struggling with mental health challenges, our qualified therapists are here to help. Book a session today and take the first step towards better mental well-being.
            </p>
            <Link 
              href="/consult"
              className="inline-flex items-center bg-[#EA3F3F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#D63636] transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
