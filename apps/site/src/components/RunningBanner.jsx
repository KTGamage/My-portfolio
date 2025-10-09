// // components/RunningBanner.jsx
// import React from 'react'
// import { motion } from 'framer-motion'

// const RunningBanner = () => {
//   const technologies = [
//     { name: "React", icon: "⚛️" },
//     { name: "Node.js", icon: "🟢" },
//     { name: "Python", icon: "🐍" },
//     { name: "MongoDB", icon: "🍃" },
//     { name: "TensorFlow", icon: "🧠" },
//     { name: "React Native", icon: "📱" },
//     { name: "JavaScript", icon: "💛" },
//     { name: "TypeScript", icon: "🔷" },
//     { name: "Tailwind CSS", icon: "💨" },
//     { name: "Express.js", icon: "🚂" },
//     { name: "Firebase", icon: "🔥" },
//     { name: "AWS", icon: "☁️" },
//     { name: "Docker", icon: "🐳" },
//     { name: "Git", icon: "📚" },
//     { name: "Machine Learning", icon: "🤖" }
//   ]

//   return (
//     <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-4 overflow-hidden">
//       <motion.div
//         className="flex whitespace-nowrap"
//         animate={{
//           x: [0, -window.innerWidth]
//         }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 30,
//             ease: "linear"
//           }
//         }}
//       >
//         {[...technologies, ...technologies].map((tech, index) => (
//           <div key={index} className="inline-flex items-center mx-8 text-white font-semibold text-lg">
//             <span className="text-2xl mr-3">{tech.icon}</span>
//             {tech.name}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// export default RunningBanner




// components/RunningBanner.jsx
import React from 'react'
import { motion } from 'framer-motion'

const RunningBanner = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "MongoDB", icon: "🍃" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Express.js", icon: "🚂" },
    { name: "Firebase", icon: "🔥" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📚" },
    { name: "JavaScript", icon: "💛" }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -window.innerWidth]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="inline-flex items-center mx-8 text-white font-semibold text-lg">
            <span className="text-2xl mr-3">{tech.icon}</span>
            <span className="text-white/90">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default RunningBanner