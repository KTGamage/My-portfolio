// import React from 'react'
// import { motion } from 'framer-motion'

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: "Frontend Development",
//       skills: [
//         { name: 'React', level: 90, color: 'bg-blue-500' },
//         { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
//         { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
//         { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
//         { name: 'Tailwind CSS', level: 88, color: 'bg-teal-500' }
//       ]
//     },
//     {
//       category: "Backend Development",
//       skills: [
//         { name: 'Node.js', level: 85, color: 'bg-green-500' },
//         { name: 'Express.js', level: 82, color: 'bg-gray-600' },
//         { name: 'Python', level: 88, color: 'bg-blue-400' },
//         { name: 'MongoDB', level: 80, color: 'bg-green-600' },
//         { name: 'REST API', level: 85, color: 'bg-purple-500' }
//       ]
//     },
//     {
//       category: "Mobile & AI/ML",
//       skills: [
//         { name: 'React Native', level: 78, color: 'bg-blue-400' },
//         { name: 'Flutter', level: 75, color: 'bg-blue-300' },
//         { name: 'Machine Learning', level: 75, color: 'bg-orange-500' },
//         { name: 'TensorFlow', level: 70, color: 'bg-orange-600' },
//         { name: 'Data Analysis', level: 80, color: 'bg-green-500' }
//       ]
//     },
//     {
//       category: "Tools & Others",
//       skills: [
//         { name: 'Git/GitHub', level: 90, color: 'bg-gray-700' },
//         { name: 'Docker', level: 75, color: 'bg-blue-500' },
//         { name: 'AWS', level: 70, color: 'bg-orange-400' },
//         { name: 'Firebase', level: 80, color: 'bg-yellow-500' },
//         { name: 'Figma', level: 85, color: 'bg-purple-600' }
//       ]
//     }
//   ]

//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Here are the technologies and tools I work with to bring ideas to life
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.category}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: categoryIndex * 0.2 }}
//               className="bg-white rounded-2xl p-6 shadow-lg"
//             >
//               <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
//                 {category.category}
//               </h3>
              
//               <div className="space-y-4">
//                 {category.skills.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="skill-item"
//                   >
//                     <div className="flex justify-between mb-2">
//                       <span className="font-semibold text-gray-700">{skill.name}</span>
//                       <span className="text-gray-600 font-medium">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1, delay: index * 0.1 }}
//                         className={`h-3 rounded-full ${skill.color} shadow-sm`}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Tech Stack Icons */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <h3 className="text-2xl font-bold mb-8 text-gray-800">Tech Stack</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
//             {[
//               'React', 'Node.js', 'Python', 'MongoDB', 
//               'JavaScript', 'TypeScript', 'Tailwind', 'Git'
//             ].map((tech, index) => (
//               <motion.div
//                 key={tech}
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2">
//                   {tech.charAt(0)}
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{tech}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Skills




// components/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'TypeScript', level: 80, icon: '🔷' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 82, icon: '🚂' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'REST API', level: 85, icon: '🔗' }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '📚' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Firebase', level: 80, icon: '🔥' },
        { name: 'Figma', level: 85, icon: '🎯' }
      ]
    }
  ]

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-gray-600 dark:text-gray-300 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-400' },
              { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-amber-400' },
              { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-lime-400' },
              { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-indigo-400' },
              { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-red-400' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-2xl mb-3 shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills