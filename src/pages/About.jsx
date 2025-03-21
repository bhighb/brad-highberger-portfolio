import { FaLaptopCode, FaChartLine, FaBookReader, FaMusic, FaWalking, FaUtensils } from 'react-icons/fa'

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="section-container">
        <h1 className="section-title">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            {/* Profile Image */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-2 mb-6">
              <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                {/* Placeholder for Profile Image */}
                <div className="w-full h-full flex items-center justify-center bg-primary-100 dark:bg-primary-900">
                  <span className="text-5xl font-bold text-primary-600 dark:text-primary-400">BH</span>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="font-semibold mr-2">Location:</span> Lombard, IL
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="font-semibold mr-2">Email:</span> brad.highberger@example.com
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="font-semibold mr-2">LinkedIn:</span> /in/bradhighberger
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="font-semibold mr-2">GitHub:</span> bhighb
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2">
            {/* Bio */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Professional Bio</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I'm a lifelong learner with a passion for cutting-edge technology, data analytics, and business strategy. I thrive on exploring emerging innovations—especially AI—and discussing how they shape industries, productivity, and the future of work.
                </p>
                <p>
                  With over 20 years of experience in the telecommunications industry, I've developed expertise in digital product management, customer experience optimization, and strategic leadership. Currently, I serve as a Senior Manager of Digital Content and Merchandising at UScellular, where I lead initiatives focused on enhancing the digital customer journey through data-driven strategies.
                </p>
                <p>
                  Beyond my professional interests, I enjoy deep philosophical conversations about technology's role in society, particularly its impact on the workforce and the need for forward-thinking solutions. I'm also passionate about continuous learning and am currently pursuing a Bachelor of Science in Business with a strong academic record.
                </p>
              </div>
            </div>
            
            {/* Interests */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Personal Interests</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <FaLaptopCode className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Emerging Technology</h3>
                    <p className="text-gray-700 dark:text-gray-300">Exploring AI and its potential to transform business and society.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <FaChartLine className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Stock Market</h3>
                    <p className="text-gray-700 dark:text-gray-300">Analyzing undervalued stocks and high-potential sectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <FaMusic className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">90s & 2000s Music</h3>
                    <p className="text-gray-700 dark:text-gray-300">Enjoying pop, rock, and rap from these iconic decades.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <FaWalking className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Long Walks</h3>
                    <p className="text-gray-700 dark:text-gray-300">Taking refreshing walks on nice days to clear my mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <FaBookReader className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Continuous Learning</h3>
                    <p className="text-gray-700 dark:text-gray-300">Constantly expanding my knowledge through various platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <FaUtensils className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Cooking</h3>
                    <p className="text-gray-700 dark:text-gray-300">Finding joy in the process of stirring while cooking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Facts */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Personal Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-2">Married Since</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">2004</p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-2">Children</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">Son (2005) & Daughter (2007)</p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-2">Born</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">1980</p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-2">Height</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">5' 11"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About