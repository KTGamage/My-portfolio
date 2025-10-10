import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ThreeDMeshBackground from './ThreeDMeshBackground'

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
    },
    {
      id: 5,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and sentiment analysis.",
      image: "/projects/chat-app.jpg",
      technologies: ["React", "Node.js", "Socket.io", "OpenAI API"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile fitness application with workout plans, progress tracking, and social features.",
      image: "/projects/fitness-app.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      category: "mobile",
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
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* 3D Mesh Background */}
      <ThreeDMeshBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-5xl text-white/90">
                  {project.featured ? '⭐' : '💻'}
                </div>
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                  >
                    Featured
                  </motion.div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📁</span> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🌐</span> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different filter category
            </p>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kasuntharaka"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-blue-400/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🚀</span>
            View All Projects on GitHub
            <span>🔗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects