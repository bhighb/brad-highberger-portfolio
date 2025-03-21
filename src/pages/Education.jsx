import { FaGraduationCap, FaBook, FaBusinessTime, FaChartBar, FaCode, FaCommentDots, FaFileAlt } from 'react-icons/fa'

const Education = () => {
  const courseCategories = [
    {
      name: 'General Education',
      icon: <FaBook className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Critical Thinking and Problem-Solving', code: 'COLL/148', grade: 'A' },
        { name: 'English Composition I', code: 'ENG/110' },
        { name: 'English Composition II', code: 'ENG/210', grade: 'A' },
        { name: 'College Algebra', code: 'MTH/220T', grade: 'A-' },
        { name: 'Calculus I', code: 'MTH/280', grade: 'B' },
        { name: 'Introduction to the Visual and Performing Arts', code: 'ARTS/100', grade: 'A' },
        { name: 'General Physics I with Laboratory', code: 'PHY/201', grade: 'A' },
        { name: 'Cyber Domain', code: 'CYB/100', grade: 'A' },
        { name: 'Foundations for University Success', code: 'GEN/201', grade: 'A' },
        { name: 'Psychology of Learning', code: 'PSY/110', grade: 'A' },
        { name: 'Everyday Economics and Finances', code: 'FP/100T', grade: 'A-' },
        { name: 'Culture & Society', code: 'SOCS/185', grade: 'B' },
      ]
    },
    {
      name: 'Business & Management',
      icon: <FaBusinessTime className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Introduction to Business & Technology', code: 'BUSN/115', grade: 'A' },
        { name: 'Organizational Behavior for Managers', code: 'MGT/312T', grade: 'A-' },
        { name: 'Managing with a Global Mindset', code: 'MGT/316T', grade: 'A-' },
        { name: 'Change Management and Implementation', code: 'MGT/362T', grade: 'B' },
        { name: 'Innovative and Creative Business Thinking', code: 'MGT/411', grade: 'Pending' },
        { name: 'Organizational Negotiations', code: 'MGT/445', grade: 'Pending' },
        { name: 'Inclusive Leadership: Diversity in the Workplace', code: 'LDR/320T', grade: 'A-' },
        { name: 'Foundations of Leadership', code: 'LDR/305T', grade: 'Pending' },
      ]
    },
    {
      name: 'Finance & Accounting',
      icon: <FaChartBar className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Principles of Accounting I', code: 'ACC/290T', grade: 'A' },
        { name: 'Principles of Accounting II', code: 'ACC/291T', grade: 'A' },
        { name: 'Finance for Business', code: 'FIN/370T', grade: 'A' },
        { name: 'Principles of Microeconomics', code: 'ECO/365T', grade: 'A-' },
        { name: 'Principles of Macroeconomics', code: 'ECO/372T', grade: 'A' },
      ]
    },
    {
      name: 'Technology & Data Analytics',
      icon: <FaCode className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Introduction to Computer Applications and Systems', code: 'BIS/221' },
        { name: 'Information Systems Fundamentals', code: 'CIS/207T', grade: 'A' },
        { name: 'PC and Device Fundamentals', code: 'CIS/291', grade: 'A' },
        { name: 'Network Troubleshooting and Support', code: 'CIS/293', grade: 'A-' },
        { name: 'Introduction to PC and Mobile Operating Systems', code: 'CIS/295', grade: 'A-' },
        { name: 'Computer Security and Operational Support Fundamentals', code: 'CIS/297', grade: 'B+' },
        { name: 'Foundations of Computer Science', code: 'CSS/200', grade: 'A' },
        { name: 'Business Data Analytics', code: 'QNT/375T', grade: 'A' },
      ]
    },
    {
      name: 'Communications & Ethics',
      icon: <FaCommentDots className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Business Communications', code: 'COM/295T', grade: 'A' },
        { name: 'Introduction to Communication', code: 'BSCOM/100T', grade: 'Pending' },
        { name: 'Ethical and Legal Topics in Business', code: 'ETH/321T', grade: 'B-' },
      ]
    },
    {
      name: 'Marketing & HR',
      icon: <FaBusinessTime className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Marketing', code: 'MKT/421T', grade: 'A' },
        { name: 'Fundamentals of Human Resource Management', code: 'HRM/300T', grade: 'A-' },
        { name: 'Total Compensation', code: 'HRM/324T', grade: 'Pending' },
      ]
    },
    {
      name: 'Capstone & Project Management',
      icon: <FaFileAlt className="text-primary-600 dark:text-primary-400 text-3xl" />,
      courses: [
        { name: 'Integrated Business Topics', code: 'BUS/475', grade: 'A-' },
        { name: 'Project Management Principles and Standards', code: 'PM/300', grade: 'Pending' },
      ]
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="section-container">
        <h1 className="section-title">Education</h1>
        
        <div className="max-w-4xl mx-auto mt-12">
          {/* University Info */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                <FaGraduationCap className="text-primary-600 dark:text-primary-400 text-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">University of Phoenix</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">Bachelor of Science in Business</p>
                <p className="text-gray-600 dark:text-gray-400">Expected Graduation: September 2025</p>
              </div>
            </div>
            
            <div className="pl-16 mb-4">
              <div className="flex items-center space-x-2 text-lg">
                <span className="font-semibold text-gray-800 dark:text-white">Current GPA:</span>
                <span className="text-primary-600 dark:text-primary-400 font-bold">3.73</span>
              </div>
            </div>
          </div>

          {/* Course Categories */}
          {courseCategories.map((category, index) => (
            <div key={index} className="mb-10">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.name} Courses</h2>
              </div>
              
              <div className="ml-16">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Course
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Code
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {category.courses.map((course, courseIndex) => (
                        <tr key={courseIndex} className={courseIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {course.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {course.code}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {course.grade ? (
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                course.grade === 'A' || course.grade === 'A-' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                  : course.grade === 'B+' || course.grade === 'B' || course.grade === 'B-'
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                    : course.grade === 'Pending'
                                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                              }`}>
                                {course.grade}
                              </span>
                            ) : (
                              <span className="text-gray-500 dark:text-gray-400">--</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Education