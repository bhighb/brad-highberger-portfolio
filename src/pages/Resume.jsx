import { FaDownload, FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="section-container">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h1>
          <a 
            href="#" 
            className="btn-outline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {/* UScellular */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                <FaBuilding className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">UScellular</h2>
                <p className="text-gray-600 dark:text-gray-400">Oct 2001 – Present</p>
              </div>
            </div>

            <div className="ml-12 space-y-8">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Sr. Manager Digital Content and Merchandising</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Jul 2023 – Present</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Leading strategy and roadmap development for digital merchandising and product information across the company website and app.</li>
                  <li>Managing content lifecycle for pricing, product, and promotional content.</li>
                  <li>Implementing site merchandising strategies focused on conversion, engagement, and frictionless shopping.</li>
                  <li>Utilizing data analytics and A/B testing to optimize the consumer experience.</li>
                  <li>Ensuring best-in-class product content management, SEO/SEM optimization, and digital asset organization.</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Sr. Manager Digital Product Management</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Apr 2021 – Jul 2023</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Led a high-performing product management team through strategic digital initiatives.</li>
                  <li>Managed full product lifecycle from development to implementation.</li>
                  <li>Developed and maintained digital product roadmaps while partnering cross-functionally with key stakeholders.</li>
                  <li>Led execution of digital product initiatives using Agile/Scrum methodologies and software development lifecycle principles.</li>
                  <li>Integrated billing systems and customer experience enhancements.</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Multi Channel Solutions Manager</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Jul 2016 – Apr 2021</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Enhanced customer experience and associate productivity through strategic technology solutions.</li>
                  <li>Served as a central point of contact for system enhancement needs and managed documentation of technology initiatives.</li>
                  <li>Acted as a liaison between operations and IT teams for user acceptance testing and platform improvements.</li>
                  <li>Maintained the strategic technology roadmap for customer service solutions.</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Enterprise Operations Manager</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Jan 2013 – Jul 2016</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Owned operational performance for care center channels, managing service levels and customer experience metrics.</li>
                  <li>Led operational initiatives across multiple locations supporting over 3,000 internal and external associates.</li>
                  <li>Developed strategic staffing plans and multichannel operational strategies.</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Earlier Positions at UScellular</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Oct 2001 – Jan 2013</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>External Support Specialist (Jan 2013 – Sep 2013)</li>
                  <li>Site Operations Manager (Mar 2012 – Jan 2013)</li>
                  <li>Technical Support Manager (Mar 2011 – Mar 2012)</li>
                  <li>Vendor Specialist (Feb 2010 – May 2011)</li>
                  <li>Customer Service Manager (Nov 2009 – Feb 2010)</li>
                  <li>Site Operations Manager (Feb 2009 – Nov 2009)</li>
                  <li>DTS (Data Technical Support) Manager (Jan 2008 – Feb 2009)</li>
                  <li>Customer Relations Supervisor (Jan 2007 – Dec 2007)</li>
                  <li>Technical Support / Help Desk Coach (Feb 2005 – Jan 2007)</li>
                  <li>Customer Service Coach (Oct 2004 – Feb 2005)</li>
                  <li>Technical Support Representative (Feb 2002 – Oct 2004)</li>
                  <li>Customer Service Representative (Oct 2001 – Feb 2002)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GC Services */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                <FaBuilding className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">GC Services</h2>
                <p className="text-gray-600 dark:text-gray-400">Aug 1999 – Aug 2001</p>
              </div>
            </div>

            <div className="ml-12 space-y-8">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Paging Operator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Aug 1999 – Aug 2001</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Served as a critical communication link between callers and pager users for MCI WorldCom.</li>
                  <li>Managed high-volume call handling and accurate message transcription.</li>
                  <li>Ensured clear and precise message delivery through telecommunications systems.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RadioShack */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                <FaBuilding className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">RadioShack</h2>
                <p className="text-gray-600 dark:text-gray-400">Oct 1998 – Jan 1999</p>
              </div>
            </div>

            <div className="ml-12 space-y-8">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Seasonal Sales Associate</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Oct 1998 – Jan 1999</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Assisted customers in selecting electronics and related products.</li>
                  <li>Processed transactions and maintained merchandising standards.</li>
                  <li>Provided product recommendations and customer support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hy-Vee */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                <FaBuilding className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hy-Vee Food Stores</h2>
                <p className="text-gray-600 dark:text-gray-400">Sep 1996 – Jun 1999</p>
              </div>
            </div>

            <div className="ml-12 space-y-8">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Various Roles</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Sep 1996 – Jun 1999</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Held roles including Checker/Stocker, Customer Service, Produce & Dairy Associate, and Peer-to-Peer Trainer.</li>
                  <li>Handled cashier operations, customer service, and inventory management.</li>
                  <li>Maintained fresh product quality and assisted with department merchandising.</li>
                  <li>Trained and mentored new employees, facilitating team knowledge-sharing initiatives.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume