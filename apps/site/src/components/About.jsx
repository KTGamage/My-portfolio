// import React from 'react'
// import { motion } from 'framer-motion'

// const About = () => {
//   const education = [
//     {
//       degree: "BSc in Computing & Information Systems",
//       institution: "Sabaragamuwa University of Sri Lanka",
//       period: "2021 - Present",
//       description: "Specializing in Software Engineering, AI/ML, and Web Technologies"
//     }
//   ]

//   const interests = [
//     "Full Stack Development",
//     "Machine Learning",
//     "Mobile App Development",
//     "Cloud Computing",
//     "UI/UX Design",
//     "Open Source Contribution"
//   ]

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Passionate Computing & Information Systems undergraduate with expertise in 
//             full-stack development and AI/ML technologies. Always eager to learn and 
//             create innovative solutions.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="glass-effect rounded-2xl p-2">
//               <img
//                 src="/profile-about.jpg"
//                 alt="About Me"
//                 className="rounded-2xl w-full shadow-2xl"
//               />
//             </div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 }}
//               className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl"
//             >
//               <div className="text-center">
//                 <div className="text-2xl font-bold">2+</div>
//                 <div className="text-sm">Years Experience</div>
//               </div>
//             </motion.div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-3xl font-bold mb-6 text-gray-800">My Journey</h3>
//             <p className="text-gray-700 mb-6 text-lg leading-relaxed">
//               I'm currently pursuing my undergraduate degree in Computing and Information 
//               Systems at Sabaragamuwa University of Sri Lanka. My journey in technology 
//               started with curiosity and has evolved into a passion for creating 
//               meaningful digital experiences.
//             </p>
//             <p className="text-gray-700 mb-6 text-lg leading-relaxed">
//               With expertise in both mobile and web development, I enjoy building 
//               full-stack applications that solve real-world problems. My interest in 
//               AI/ML drives me to explore intelligent systems and data-driven solutions 
//               that can make a positive impact.
//             </p>

//             <div className="grid grid-cols-2 gap-6 mb-8">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-800 mb-2">🎓 Education</h4>
//                 <p className="text-gray-600">BSc Computing & IS</p>
//                 <p className="text-sm text-gray-500">Sabaragamuwa University</p>
//               </div>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-800 mb-2">💼 Experience</h4>
//                 <p className="text-gray-600">Full Stack Developer</p>
//                 <p className="text-sm text-gray-500">2+ Years</p>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold text-gray-800 mb-4">Interests & Passions</h4>
//               <div className="flex flex-wrap gap-2">
//                 {interests.map((interest, index) => (
//                   <motion.span
//                     key={interest}
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {interest}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Education Timeline */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-gray-50 rounded-2xl p-8"
//         >
//           <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Education</h3>
//           <div className="max-w-2xl mx-auto">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0"
//               >
//                 <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm">
//                   <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h4>
//                   <p className="text-gray-600 mb-2">{edu.institution}</p>
//                   <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
//                     {edu.period}
//                   </span>
//                   <p className="text-gray-700">{edu.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default About


// components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const education = [
    {
      degree: "G.C.E Advanced Level - Physical Science Stream",
      institution: "",
      period: "2019 - 2021",
      description: "Achieved 2B's and 1C"
    },
    {
      degree: "G.C.E Ordinary Level",
      institution: "",
      period: "2018",
      description: "Achieved 8A's and 1B"
    },
    {
      degree: "BSc in Computing & Information Systems",
      institution: "Sabaragamuwa University of Sri Lanka",
      period: "2021 - Present",
      description: "Specializing in Software Engineering, AI/ML, and Web Technologies"
    }
  ]

  const interests = [
    "Full Stack Development", "Machine Learning", "Mobile App Development", 
    "Cloud Computing", "UI/UX Design", "Open Source Contribution"
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate Computing & Information Systems undergraduate with strong foundation in 
            full-stack development and emerging technologies. Always eager to learn and 
            create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Journey</h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm currently pursuing my undergraduate degree in Computing and Information 
                Systems at Sabaragamuwa University of Sri Lanka. My academic journey started 
                with excellent results in both Ordinary and Advanced Level examinations.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in physical sciences and computing, I've developed 
                expertise in both mobile and web development. I enjoy building full-stack 
                applications that solve real-world problems and create meaningful impact.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">🎓</div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Education</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">BSc Computing & IS</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">💼</div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Focus</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Full Stack Development</p>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">Interests & Passions</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                    {edu.institution && (
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                    )}
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {edu.period}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About