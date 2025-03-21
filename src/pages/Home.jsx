import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import profileAvatar from '../assets/profile-avatar.jpeg'

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-28">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                Brad <span className="text-primary-600 dark:text-primary-400">Highberger</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
                Sr. Manager Digital Content and Merchandising
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Passionate about cutting-edge technology, data analytics, and business strategy. 
                Experienced in driving digital transformations and optimizing customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary flex items-center justify-center sm:justify-start gap-2">
                  Learn More <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn-outline flex items-center justify-center sm:justify-start gap-2">
                  Get In Touch <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 max-w-md">
                <div className="aspect-square w-full rounded overflow-hidden">
                  <img 
                    src={profileAvatar} 
                    alt="Brad Highberger" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container">
          <h2 className="section-title">What I Do</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Digital Strategy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Developing comprehensive digital strategies focused on conversion, engagement, and frictionless shopping experiences.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Content Management</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Managing the full content lifecycle for pricing, product, and promotional content across digital platforms.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Data Analytics</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Leveraging data analytics and A/B testing to optimize consumer experiences and drive business decisions.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills" className="btn-outline inline-flex items-center gap-2">
              View All Skills <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50 dark:bg-gray-800">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get In Touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home