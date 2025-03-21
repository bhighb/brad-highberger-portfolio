import { useState } from 'react'
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  const [filter, setFilter] = useState('all')
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Content Management',
      excerpt: 'Exploring how artificial intelligence is transforming content creation, curation, and personalization in digital platforms.',
      date: 'March 15, 2025',
      category: 'Technology',
      image: 'ai-content',
      tags: ['AI', 'Digital Content', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Effective Strategies for Digital Merchandising',
      excerpt: 'A deep dive into data-driven approaches that optimize digital merchandising and enhance customer experiences.',
      date: 'February 28, 2025',
      category: 'Business',
      image: 'digital-merchandising',
      tags: ['Digital Merchandising', 'E-commerce', 'Customer Experience']
    },
    {
      id: 3,
      title: 'Universal High Income: A Solution for the AI-Driven Future?',
      excerpt: 'Examining how universal high income could address workforce disruption in an increasingly automated world.',
      date: 'February 10, 2025',
      category: 'Philosophy',
      image: 'universal-income',
      tags: ['Future of Work', 'Economic Policy', 'Automation']
    },
    {
      id: 4,
      title: 'Data Analytics Approaches for Optimizing Digital Experiences',
      excerpt: 'How to leverage user data and A/B testing to create frictionless and personalized customer journeys.',
      date: 'January 22, 2025',
      category: 'Technology',
      image: 'data-analytics',
      tags: ['Data Analytics', 'A/B Testing', 'UX Optimization']
    },
    {
      id: 5,
      title: 'Leading Through Technological Change: A Manager\'s Guide',
      excerpt: 'Strategies for effectively guiding teams through digital transformation and technological disruption.',
      date: 'January 5, 2025',
      category: 'Leadership',
      image: 'tech-leadership',
      tags: ['Leadership', 'Change Management', 'Digital Transformation']
    },
    {
      id: 6,
      title: 'The Evolving Landscape of Customer Engagement',
      excerpt: 'How digital technologies are reshaping customer interactions and creating new opportunities for meaningful engagement.',
      date: 'December 18, 2024',
      category: 'Business',
      image: 'customer-engagement',
      tags: ['Customer Engagement', 'Digital Marketing', 'CRM']
    }
  ]

  const categories = ['all', 'Technology', 'Business', 'Leadership', 'Philosophy']
  
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter)

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="section-container">
        <h1 className="section-title">Blog</h1>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              {/* Blog Post Image */}
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                {/* This would be replaced with an actual image in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary-100 dark:bg-primary-900">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">{post.image}</span>
                </div>
              </div>
              
              <div className="p-6">
                {/* Category */}
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {post.category}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition duration-300">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-1" />
                    <span>Brad Highberger</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      <FaTags className="inline-block mr-1 text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More Button */}
                <button className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  Read More <FaArrowRight className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Coming Soon Message if no posts match the filter */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              No posts in this category yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for new content or choose a different category.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Blog