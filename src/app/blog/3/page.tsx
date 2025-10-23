import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Blog Post Content */}
      <section className="bg-white py-20">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Sleep Smart
            </h1>
            <div className="flex items-center text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span>Published on January 25, 2024</span>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/blog-post-3.png" 
              alt="Sleep Smart" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Intro: Why Sleep is Your Secret Weapon
              </h2>
              
              <p>
                Sleep is one of the most powerful, yet often overlooked, factors influencing mental health. According to the National Sleep Foundation, adults need 7–9 hours of sleep per night, yet studies suggest that nearly 1 in 3 adults fail to get sufficient rest. Sleep is not a luxury—it is essential for cognitive function, emotional regulation, physical repair, and overall well-being.
              </p>

              <p>
                Inadequate sleep can have wide-ranging effects. It can affect your mood, concentration, productivity, and relationships. Chronic sleep deprivation is linked to anxiety, depression, weakened immunity, obesity, and even cardiovascular diseases. Despite this, many people sacrifice sleep for work, social obligations, or digital distractions.
              </p>

              <p>
                This blog post explores the science of sleep, its impact on mental and physical health, common sleep disorders, and actionable strategies to optimize your nightly rest.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                The Science of Sleep
              </h2>

              <p>
                Sleep is a complex biological process that affects almost every system in the body. It is regulated by circadian rhythms—24-hour internal clocks influenced by light, activity, and hormones. Sleep has several stages:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Non-REM Sleep:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Stage 1:</strong> Light sleep, transitioning between wakefulness and sleep</li>
                <li><strong>Stage 2:</strong> Slightly deeper sleep, body temperature drops, heart rate slows</li>
                <li><strong>Stage 3:</strong> Deep sleep, critical for physical repair, growth, and immune function</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                REM Sleep (Rapid Eye Movement):
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Associated with dreaming</li>
                <li>Essential for emotional regulation, memory consolidation, and learning</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <p><strong>Fun Fact:</strong> During REM sleep, the brain processes experiences, consolidates memories, and regulates emotions. Skipping REM sleep can contribute to irritability, poor memory, and heightened stress.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                How Sleep Affects Mental Health
              </h2>

              <p>
                Sleep and mental health share a bidirectional relationship: poor sleep can worsen mental health, and mental health problems can interfere with sleep.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mood Regulation:</strong> Lack of sleep can cause irritability, emotional instability, and heightened sensitivity to stress.</li>
                <li><strong>Cognitive Function:</strong> Sleep deprivation reduces focus, decision-making, and problem-solving skills.</li>
                <li><strong>Stress Response:</strong> Sleep deficiency increases cortisol levels, exacerbating stress and anxiety.</li>
                <li><strong>Depression and Anxiety:</strong> Chronic sleep disruption is a major risk factor for both disorders.</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg my-6">
                <p><strong>Example:</strong></p>
                <p>Sanya, a 30-year-old teacher, struggled with insomnia due to workload stress. She experienced anxiety, memory lapses, and decreased energy. By adjusting her sleep environment, practicing relaxation techniques, and seeking professional advice, she regained restful nights and improved mental clarity.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Common Sleep Disorders
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Insomnia:</strong> Difficulty falling or staying asleep, often linked to stress, anxiety, or poor sleep habits.</li>
                <li><strong>Sleep Apnea:</strong> Interrupted breathing during sleep, causing fatigue, headaches, and reduced oxygenation.</li>
                <li><strong>Restless Legs Syndrome (RLS):</strong> Uncontrollable urge to move legs during rest, disrupting sleep.</li>
                <li><strong>Narcolepsy:</strong> Excessive daytime sleepiness due to brain dysfunction in regulating sleep-wake cycles.</li>
              </ul>

              <p>
                Recognizing and addressing these disorders early is essential for both mental and physical health. A sleep specialist can help diagnose and treat chronic conditions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Tips for Better Sleep
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                1. Maintain a Consistent Sleep Schedule:
              </h3>
              <p>Go to bed and wake up at the same time every day, even on weekends. This regulates your circadian rhythm and improves sleep quality.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                2. Create a Sleep-Friendly Environment:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Keep the bedroom cool, dark, and quiet</li>
                <li>Invest in a comfortable mattress and pillows</li>
                <li>Remove electronic devices or use "night mode" to reduce blue light exposure</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                3. Practice Relaxation Techniques:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Deep breathing exercises or progressive muscle relaxation</li>
                <li>Guided meditation or calming music</li>
                <li>Visualization techniques, imagining peaceful scenarios</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                4. Limit Stimulants and Disruptors:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Avoid caffeine or nicotine 6 hours before bedtime</li>
                <li>Minimize alcohol, which disrupts REM sleep</li>
                <li>Avoid heavy meals close to bedtime</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                5. Physical Activity:
              </h3>
              <p>Exercise during the day helps regulate sleep, reduces stress, and improves mood. Avoid intense workouts right before bed.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                6. Mindful Digital Habits:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reduce screen time before sleep</li>
                <li>Avoid scrolling social media or watching intense content</li>
                <li>Try reading, journaling, or listening to soft music instead</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Lifestyle Strategies for Long-Term Sleep Health
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Balanced Diet:
              </h3>
              <p>Certain nutrients influence sleep. Magnesium, tryptophan, and omega-3 fatty acids can improve sleep quality. Incorporate foods like nuts, seeds, fish, leafy greens, and dairy.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Stress Management:
              </h3>
              <p>Since stress interferes with sleep, practices like yoga, meditation, and mindfulness can help both mental health and rest. Journaling worries before bed helps clear the mind.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Routine and Rituals:
              </h3>
              <p>Establish a pre-sleep routine: dim lights, take a warm shower, read a book, or sip herbal tea. Rituals signal your body that it's time to relax.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Limit Daytime Naps:
              </h3>
              <p>While short naps can boost energy, long or late naps can disrupt nighttime sleep. If necessary, keep naps under 30 minutes and earlier in the day.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                When to Seek Professional Help
              </h2>

              <p>Persistent sleep problems should not be ignored. Consider consulting a sleep specialist if you:</p>

              <ul className="list-disc pl-6 space-y-1">
                <li>Take more than 30 minutes to fall asleep consistently</li>
                <li>Wake frequently during the night or have trouble returning to sleep</li>
                <li>Experience daytime fatigue despite sufficient time in bed</li>
                <li>Snore loudly, gasp for air, or stop breathing during sleep</li>
              </ul>

              <p>
                Treatment may include cognitive-behavioral therapy for insomnia (CBT-I), medical interventions, or lifestyle modifications tailored to individual needs.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                The Mental Health Benefits of Good Sleep
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Improved Mood:</strong> Adequate sleep reduces irritability, anxiety, and depression.</li>
                <li><strong>Enhanced Cognitive Function:</strong> Better focus, problem-solving, and memory.</li>
                <li><strong>Stress Resilience:</strong> A rested mind handles stress more effectively.</li>
                <li><strong>Emotional Regulation:</strong> Sleep enhances self-control and reduces impulsivity.</li>
                <li><strong>Physical Health:</strong> Strengthens immunity, reduces risk of chronic disease, and supports weight management.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Conclusion: Make Sleep Your Superpower
              </h2>

              <p>
                Sleep is not optional—it is a vital investment in your physical, emotional, and mental well-being. By adopting consistent routines, managing stress, creating a sleep-friendly environment, and seeking help when necessary, you can transform your nights and, in turn, your days.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Actionable Steps:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Set a fixed bedtime and wake time</li>
                <li>Create a calm, dark sleep environment</li>
                <li>Limit caffeine, alcohol, and screen exposure before bed</li>
                <li>Practice mindfulness or relaxation techniques</li>
                <li>Exercise regularly and eat a balanced diet</li>
              </ul>

              <div className="bg-purple-50 p-6 rounded-lg my-6">
                <p><strong>Remember:</strong> sleep is not wasted time; it is preparation for a productive, balanced, and happy life. Prioritize it, protect it, and watch your mental health flourish.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Struggling with Sleep Issues?
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              If sleep problems are affecting your mental health and daily life, our sleep specialists can help you develop healthy sleep habits and address underlying issues. Book a consultation today.
            </p>
            <Link 
              href="/consult"
              className="inline-flex items-center bg-[#EA3F3F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#D63636] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
