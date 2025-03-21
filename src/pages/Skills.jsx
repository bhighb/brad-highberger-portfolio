import { FaChartLine, FaUsers, FaLightbulb, FaCode, FaDatabase, FaUserTie, FaTools, FaTasks } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Strategic & Business Leadership',
      icon: <FaUserTie className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Strategic Planning', 'Integrated Business Planning', 'Business Strategies',
        'Project Performance', 'Change Management', 'Key Performance Indicators (KPIs)',
        'Forecasting', 'Decision Making', 'Risk Management', 'Governance', 'Infrastructure Management'
      ]
    },
    {
      name: 'Market & Consumer Insights',
      icon: <FaLightbulb className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Market Research', 'Marketing Strategies', 'Consumer Behavior Analysis'
      ]
    },
    {
      name: 'Financial & Economic Expertise',
      icon: <FaChartLine className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Financial Planning', 'Time Value of Money', 'Financial Analysis',
        'Business Economics', 'Economic Development', 'Macroeconomics',
        'Microeconomics', 'Supply and Demand', 'Resource Allocation',
        'Budgeting', 'Financial Management', 'Reconciliations and Adjustments',
        'Accounts Payable & Receivable', 'Accounting'
      ]
    },
    {
      name: 'Operations & Project Management',
      icon: <FaTasks className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Operational Excellence', 'Vendor Management', 'Process Optimization',
        'Project Performance', 'Cross-Functional Team Leadership', 'Organizational Behavior',
        'Training and Development', 'Employee Development', 'Employee Relations',
        'Organizational Culture', 'Business Law and Ethics', 'Business Structures',
        'Compliance & Regulatory Adherence'
      ]
    },
    {
      name: 'Technology & Digital Transformation',
      icon: <FaCode className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Digital Product Management', 'Digital Transformation Strategies', 'Enterprise Systems Management',
        'Technical Support', 'Business Communication Tools', 'Security Fundamentals',
        'Operating Systems (Windows, Mac)', 'Infrastructure & Cloud Technologies'
      ]
    },
    {
      name: 'Data & Analytics',
      icon: <FaDatabase className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Data Analysis', 'Research & Investigation', 'Data Collection & Interpretation',
        'Scientific Modeling', 'Business Intelligence Reporting'
      ]
    },
    {
      name: 'Customer Experience & Engagement',
      icon: <FaUsers className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Customer Experience Innovation', 'Customer Service Strategy', 'Customer Relations Management',
        'Digital Merchandising & Personalization', 'SEO & SEM Optimization', 'Content Management Systems (CMS)',
        'UX/UI Optimization for Digital Platforms', 'Provide Information About Process or Practice'
      ]
    },
    {
      name: 'Leadership & Team Development',
      icon: <FaUsers className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Talent Management & Mentoring', 'Influencing & Negotiation Skills', 'Public Speaking & Communication',
        'Interpersonal Communication', 'Performance Coaching', 'Peer-to-Peer Training'
      ]
    },
    {
      name: 'Process Improvement & Automation',
      icon: <FaTools className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Process Documentation & Standardization', 'Workflow Optimization', 'Lean & Agile Methodologies',
        'Continuous Improvement Programs'
      ]
    },
    {
      name: 'Software & Technical Proficiency',
      icon: <FaCode className="text-primary-600 dark:text-primary-400 text-3xl" />,
      skills: [
        'Microsoft Office Suite (Excel, PowerPoint, Word, Outlook)',
        'Adobe AEM', 'Figma', 'HTML/CSS', 'CRM & ERP Systems',
        'Call Center Technologies (Genesys, Avaya)', 'Workforce Planning Software (Aspect eWFM, RTA)',
        'Presentations & Communication Tools'
      ]
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="section-container">
        <h1 className="section-title">Skills & Expertise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
              </div>
              
              <div className="flex flex-wrap mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag text-gray-700 dark:text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills