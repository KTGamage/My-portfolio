// import React from 'react'
// import { motion } from 'framer-motion'

// const Achievements = () => {
//   const achievements = [
//     {
//       title: "Hackathon Winner",
//       organization: "University Tech Fest 2023",
//       description: "First place in university-level hackathon for developing an AI-powered learning platform",
//       year: "2023",
//       icon: "🏆"
//     },
//     {
//       title: "Best Final Year Project",
//       organization: "Faculty of Computing",
//       description: "Awarded for innovative approach in final year project on machine learning applications",
//       year: "2024",
//       icon: "⭐"
//     },
//     {
//       title: "Google Developer Scholarship",
//       organization: "Google & Andela",
//       description: "Selected among top candidates for mobile web specialist nanodegree program",
//       year: "2023",
//       icon: "📱"
//     },
//     {
//       title: "Open Source Contributor",
//       organization: "GitHub",
//       description: "Active contributor to multiple open source projects with 50+ contributions",
//       year: "2024",
//       icon: "💻"
//     }
//   ]

//   const certifications = [
//     {
//       name: "AWS Certified Cloud Practitioner",
//       issuer: "Amazon Web Services",
//       date: "2024",
//       credential: "AWS-CCP-12345"
//     },
//     {
//       name: "Google Cloud Associate Engineer",
//       issuer: "Google Cloud",
//       date: "2023",
//       credential: "GCP-AE-67890"
//     },
//     {
//       name: "TensorFlow Developer Certificate",
//       issuer: "TensorFlow",
//       date: "2023",
//       credential: "TFD-45678"
//     },
//     {
//       name: "MongoDB University Certification",
//       issuer: "MongoDB",
//       date: "2023",
//       credential: "MDB-23456"
//     }
//   ]

//   return (
//     <section id="achievements" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-4 gradient-text">Achievements & Certifications</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Recognition and certifications that highlight my dedication to continuous learning and excellence
//           </p>
//         </motion.div>

//         {/* Achievements Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16"
//         >
//           <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Achievements</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="text-4xl">{achievement.icon}</div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start mb-2">
//                       <h4 className="text-xl font-bold text-gray-800">{achievement.title}</h4>
//                       <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
//                         {achievement.year}
//                       </span>
//                     </div>
//                     <p className="text-blue-600 font-semibold mb-2">{achievement.organization}</p>
//                     <p className="text-gray-600">{achievement.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Certifications */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Certifications</h3>
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Certification</th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Issuer</th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Credential</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {certifications.map((cert, index) => (
//                   <motion.tr
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
//                     className="transition-colors duration-200"
//                   >
//                     <td className="px-6 py-4">
//                       <div className="text-sm font-medium text-gray-900">{cert.name}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-600">{cert.issuer}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                         {cert.date}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
//                         {cert.credential}
//                       </code>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { number: '20+', label: 'Projects Completed' },
//             { number: '5+', label: 'Hackathons' },
//             { number: '10+', label: 'Technologies' },
//             { number: '2+', label: 'Years Experience' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="text-center bg-white p-6 rounded-2xl shadow-lg"
//             >
//               <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Achievements







// components/Achievements.jsx
import React from 'react'
import { motion } from 'framer-motion'

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
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and certifications that highlight my dedication to continuous learning and excellence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
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
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Certifications</h3>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create something amazing! I'm always open to discussing new opportunities and innovative projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements