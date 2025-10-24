import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Mind Matters: Prioritize Your Mental Health",
      author: "Psychiatrist",
      description: "Mental health is the cornerstone of overall well-being, yet it is often overlooked. It affects how we think, feel, and act in daily life...",
      image: "/blog-post-1.png",
      href: "/blog/1"
    },
    {
      id: 2,
      title: "Building Resilience in Challenging Times",
      author: "Sleep Specialist & Psychotherapist",
      description: "Life's challenges can feel overwhelming, but building resilience helps us bounce back stronger. Learn practical strategies to develop mental toughness...",
      image: "/blog-post-2.png",
      href: "/blog/2"
    },
    {
      id: 3,
      title: "The Power of Mindfulness in Daily Life",
      author: "Counseling Psychologist",
      description: "Mindfulness isn't just meditation—it's a way of living that can transform your mental health. Discover simple techniques to stay present...",
      image: "/blog-post-3.png",
      href: "/blog/3"
    },
    {
      id: 4,
      title: "Understanding and Managing Stress",
      author: "Mindfulness Coach",
      description: "Stress is a natural response, but chronic stress can harm your mental health. Learn to recognize stress signals and develop healthy coping mechanisms...",
      image: "/blog-post-4.png",
      href: "/blog/4"
    },
    {
      id: 5,
      title: "Creating Healthy Relationships",
      author: "Clinical Psychologist",
      description: "Healthy relationships are fundamental to mental well-being. Explore how to build meaningful connections and maintain emotional boundaries...",
      image: "/blog-post-5.png",
      href: "/blog/5"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Blog Header */}
      <section className="bg-white pt-32 pb-12 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Latest Blog Posts
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Explore mental health insights, wellness tips, and coping strategies from AIWA experts.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={post.href} className="block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {post.author}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {post.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
