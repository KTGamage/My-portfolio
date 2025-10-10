// components/Achievements.jsx
import React from 'react'
import { motion } from 'framer-motion'
import ThreeDMeshBackground from './ThreeDMeshBackground'

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Winner",
      organization: "University Tech Fest 2023",
      description: "First place in university-level hackathon for developing an AI-powered learning platform",
      year: "2023",
      icon: "🏆",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Best Final Year Project",
      organization: "Faculty of Computing",
      description: "Awarded for innovative approach in final year project on machine learning applications",
      year: "2024",
      icon: "⭐",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Google Developer Scholarship",
      organization: "Google & Andela",
      description: "Selected among top candidates for mobile web specialist nanodegree program",
      year: "2023",
      icon: "📱",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Active contributor to multiple open source projects with 50+ contributions",
      year: "2024",
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credential: "AWS-CCP-12345",
      icon: "☁️"
    },
    {
      name: "Google Cloud Associate Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credential: "GCP-AE-67890",
      icon: "🔧"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2023",
      credential: "TFD-45678",
      icon: "🧠"
    },
    {
      name: "MongoDB University Certification",
      issuer: "MongoDB",
      date: "2023",
      credential: "MDB-23456",
      icon: "🍃"
    }
  ]

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: '🚀' },
    { number: '5+', label: 'Hackathons', icon: '⚡' },
    { number: '15+', label: 'Technologies', icon: '🛠️' },
    { number: '50+', label: 'GitHub Contributions', icon: '📚' }
  ]

  return (
    <section id="achievements" className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
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
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and certifications that highlight my dedication to continuous learning and excellence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{achievement.organization}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Certifications</h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {cert.date}
                        </span>
                        <code className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-sm font-mono">
                          {cert.credential}
                        </code>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements