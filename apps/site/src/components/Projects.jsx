// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all')

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
//       image: "/projects/ecommerce.jpg",
//       technologies: ["React", "Node.js", "MongoDB", "Express"],
//       category: "fullstack",
//       github: "https://github.com",
//       live: "https://demo.com",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "AI Chat Application",
//       description: "Real-time chat application with AI-powered responses",
//       image: "/projects/chat-app.jpg",
//       technologies: ["React", "Socket.io", "Python", "TensorFlow"],
//       category: "ai-ml",
//       github: "https://github.com",
//       live: "https://demo.com",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Mobile Task Manager",
//       description: "Cross-platform task management application",
//       image: "/projects/task-app.jpg",
//       technologies: ["React Native", "Firebase", "Redux"],
//       category: "mobile",
//       github: "https://github.com",
//       live: "https://demo.com",
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Data Visualization Dashboard",
//       description: "Interactive dashboard for data analysis and visualization",
//       image: "/projects/dashboard.jpg",
//       technologies: ["React", "D3.js", "Python", "FastAPI"],
//       category: "web",
//       github: "https://github.com",
//       live: "https://demo.com",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "ML Price Prediction",
//       description: "Machine learning model for price prediction",
//       image: "/projects/ml-project.jpg",
//       technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
//       category: "ai-ml",
//       github: "https://github.com",
//       live: "https://demo.com",
//       featured: false
//     },
//     {
//       id: 6,
//       title: "Portfolio Website",
//       description: "Modern responsive portfolio website",
//       image: "/projects/portfolio.jpg",
//       technologies: ["React", "Tailwind CSS", "Framer Motion"],
//       category: "web",
//       github: "https://github.com",
//       live: "https://demo.com",
//       featured: false
//     }
//   ]

//   const filters = [
//     { name: 'All', value: 'all' },
//     { name: 'Full Stack', value: 'fullstack' },
//     { name: 'Web', value: 'web' },
//     { name: 'Mobile', value: 'mobile' },
//     { name: 'AI/ML', value: 'ai-ml' }
//   ]

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter)

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-4 gradient-text">My Projects</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Here are some of my recent projects that showcase my skills and experience
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter.value}
//               onClick={() => setActiveFilter(filter.value)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                 activeFilter === filter.value
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {filter.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//             >
//               {/* Project Image */}
//               <div className="relative overflow-hidden h-48">
//                 <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl">
//                   {project.title.charAt(0)}
//                 </div>
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                   <div className="flex gap-4">
//                     <a
//                       href={project.github}
//                       className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                       </svg>
//                     </a>
//                     <a
//                       href={project.live}
//                       className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 {project.featured && (
//                   <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     Featured
//                   </div>
//                 )}
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
                
//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3">
//                   <a
//                     href={project.github}
//                     className="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Code
//                   </a>
//                   <a
//                     href={project.live}
//                     className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Demo
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//             View All Projects on GitHub
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Projects




// components/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB with payment integration and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time updates, drag-drop functionality, and team collaboration features.",
      image: "/projects/task-app.jpg",
      technologies: ["React", "Firebase", "Tailwind", "Context API"],
      category: "web",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts, maps, and location-based services using modern APIs.",
      image: "/projects/weather-app.jpg",
      technologies: ["JavaScript", "API", "Chart.js", "CSS3"],
      category: "web",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with dark mode, animations, and optimized performance.",
      image: "/projects/portfolio.jpg",
      technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
      category: "web",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    }
  ]

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Web Apps', value: 'web' },
    { name: 'Mobile', value: 'mobile' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-6xl text-white opacity-80">
                  {project.featured ? '⭐' : '💻'}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-lg">📁</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-lg">🌐</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📁</span> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🌐</span> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects